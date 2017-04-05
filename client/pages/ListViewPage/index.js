import React from 'react';
import styled from 'styled-components';
import RecordingsList from 'components/RecordingsList';

export class ListViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const PageWrapper = styled.section`
      width: 100%;
    `;

    return (
      <PageWrapper>
        <RecordingsList />
      </PageWrapper>
    );
  }
}

export default ListViewPage;
