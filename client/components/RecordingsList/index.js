import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import ReactAudioPlayer from 'react-audio-player';
import StarRatingComponent from 'react-star-rating-component';
import Loading from 'components/Loading';
import { formatDate, convertSecsToMins } from 'utils/helpers';
import { fetchRecordings } from './actions';
import selectRecordingsList from './selectors';

class RecordingsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    push: React.PropTypes.func.isRequired,
    fetchRecordings: React.PropTypes.func.isRequired,
    status: React.PropTypes.any,
    list: React.PropTypes.array,
  };

  static defaultProps = {
    list: [],
  };

  componentDidMount() {
    this.props.fetchRecordings();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.status.success && nextProps.status.error) {
      this.props.push('/login');
    }
  }

  formatFinalScript(str) {
    var urlRegex = 
      new RegExp(
      '((https?://)' + 
      '(([0-9]{1,3}\.){3}[0-9]{1,3}' + // IP- 199.194.52.184 
      '|' + // allows either IP or domain 
      '([0-9a-z_!~*\'()-]+\.)*' + // tertiary domain(s)- www. 
      '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' + // second level domain 
      '[a-z]{2,6})' + // first level domain- .com or .museum 
      '(:[0-9]{1,4})?' + // port number- :80 
      '((/?)|' + // a slash isn't required if there is no file name 
      '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?))',
      "gi");

    return str.replace(urlRegex, "<a href='$1'>$1</a>").replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }

  render() {
    const {
      status,
      list,
    } = this.props;

    if (status.isLoading) {
      return <Loading />;
    }
    

    const PageWrapper = styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;

    const Title = styled.h1`
      font-size: 30px;
      text-align: center;
      margin: 20px 0;
    `;

    const RecordingWrapper = styled.div `
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      border: 1px solid #aaa;
      padding: 20px;
      @media (max-width: 768px) {
        padding: 10px;
      }

    `;

    const FinalScript = styled.p`
      line-height: 125%;
      margin-bottom: 10px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      & a {
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: auto;
        margin-bottom: -20px;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    `;

    const Rating = styled.div `
      display: flex;
    `

    const AudioDuration = styled.h4 `
      line-height: 120%;
      display: flex;
      font-size: 16px;
      & * {
        font-weight: 500;
      }
      & h4 {
        font-size: 16px;
        margin-right: 5px;
        flex-shrink: 0;
      }      
      & p {
        font-size: 14px;
      }
    `

    const AudioRecording = styled.div `
      line-height: 120%;
      display: flex;
      align-items: center;
    `

    const CreationDate = styled.div `
      display: flex;
      align-items: center;
      & h4 {
        font-weight: 500;
        font-size: 16px;
        margin-right: 5px;
        flex-shrink: 0;
      }
      & p {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `

    return (
      <PageWrapper>
        <Title>Recordings List</Title>
        {list.map((item, index) => (
          <RecordingWrapper key={index}>
            <FinalScript dangerouslySetInnerHTML={{__html: this.formatFinalScript(item.final_script)}}/>
            <Rating>
              <StarRatingComponent 
                name={index} 
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={item.rating}
              />
            </Rating>
            <AudioDuration><h4>Audio duration:</h4><p title={convertSecsToMins(item.duration)+"m"}>{convertSecsToMins(item.duration)}m</p></AudioDuration>
            <AudioRecording>
              <ReactAudioPlayer src={item.url} />
            </AudioRecording>
            <CreationDate><h4>Created at:</h4><p title={formatDate(item.created, 'MMMM DD, YYYY, h:mm a')}>{formatDate(item.created, 'MMMM DD, YYYY, h:mm a')}</p></CreationDate>
          </RecordingWrapper>
        ))}
      </PageWrapper>
    );
  }
}

const mapStateToProps = selectRecordingsList();

const mapDispatchToProps = {
  push,
  fetchRecordings,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(RecordingsList));
