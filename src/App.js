import React, { Component } from 'react';
import moment from 'moment';
import Configuration from './Configuration';
import TimerTable from './TimerTable';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: moment().seconds(0),
      drawInterval: 7,
      releaseInterval: 5,
      callInterval: 2,
      speakers: 7
    }
  }

  render() {
    return (
      <div>
        <Configuration
          startTime={this.state.startTime}
          drawInterval={this.state.drawInterval}
          releaseInterval={this.state.releaseInterval}
          callInterval={this.state.callInterval}
          speakers={this.state.speakers}
          setStartTime={this.setStartTime}
          onConfigChange={this.handleConfigChange}
        />
        <TimerTable
          startTime={this.state.startTime}
          drawInterval={this.state.drawInterval}
          releaseInterval={this.state.releaseInterval}
          callInterval={this.state.callInterval}
          speakers={this.state.speakers}
        />
      </div>
    );
  }

  setStartTime = (time) => {
    const [hour, minute] = time.split(":")
    const now = moment();
    this.setState(state => ({
      startTime: state.startTime.clone().hour(hour).minute(minute).seconds(0).year(now.year()).month(now.month()).date(now.date())
    }))
  }

  handleConfigChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

}

export default App;
