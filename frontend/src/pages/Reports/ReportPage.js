import axios from 'axios';
import React from 'react';
import http from '../../http-common'


class ReportPage extends React.Component {
  state = { reportData: null }

  componentDidMount() {
    http.get('/reports')
      .then(response => {
        this.setState({ reportData: response.data.html });
      });
  }

  render() {
    return (
      <div>
        {this.state.reportData && <div dangerouslySetInnerHTML={{ __html: this.state.reportData }} />}
      </div>
    );
  }
}

export default ReportPage;