import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
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

  render() {
    const {
      status,
      list,
    } = this.props;

    if (status.isLoading) {
      return <Loading />;
    }

    const PageWrapper = styled.section`
    `;

    return (
      <PageWrapper>
        <h3>RecordingsList component</h3>
        {list.map((item, index) => (
          <div key={index}>
            Text: <h4>{item.final_script}</h4>
            Rating: <h4>{item.rating}</h4>
            Duration: <h4>{convertSecsToMins(item.duration)}m</h4>
            Audio URL: <h4>{item.url}</h4>
            Created at: <h4>{formatDate(item.created, 'MMMM DD, YYYY, h:mm a')}</h4>
            <hr />
          </div>
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
