import React, { Component } from 'react';
import TimerRow from './TimerRow';
import moment from 'moment';

class TimerTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.newTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const rows = [];
    for (let i = 0; i < this.props.speakers; i++) {
      const drawTime = this.props.startTime.clone().add(i * (parseInt(this.props.drawInterval) || 0), 'minutes');
      const speakTime = drawTime.clone().add(30, 'minutes');
      const releaseTime = speakTime.clone().subtract(this.props.releaseInterval, 'minutes');
      const callTime = drawTime.clone().subtract(this.props.callInterval, 'minutes');
      rows.push(
        <TimerRow
          key={i}
          currentTime={this.state.currentTime}
          speakerId={i+1}
          callTime={callTime}
          drawTime={drawTime}
          releaseTime={releaseTime}
          speakTime={speakTime}
          showNames={this.props.showNames}
        />
      );
    }
    return (
      <div>
        <div id="currentTime">
          {this.state.currentTime.format("hh:mm:ss A")}
        </div>
        <table>
          <thead>
            <tr>
              <th>Speaker</th>
              {this.props.showNames && <th>Name</th>}
              <th>Draw</th>
              <th>Release</th>
              <th>Speak</th>
              <th>Status</th>
            </tr>
          </thead> 
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }

  newTime = () => {
    this.setState({
      currentTime: moment()
    });
  }
}

export default TimerTable;