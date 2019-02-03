import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

class TimerRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render() {
    const { currentTime, callTime, drawTime, releaseTime, speakTime } = this.props;
    const [status, classname] = (() => {
      return currentTime < callTime ? ["Waiting", "waiting"] :
             currentTime < drawTime ? ["Call to Table", "called"] :
             currentTime < drawTime.clone().add(1, 'minutes') ? ["Draw", "draw"] :
             currentTime < releaseTime ? ["Preparing", "preparing"] :
             currentTime < speakTime ? ["Release", "released"] :
             currentTime < speakTime.clone().add(7, 'minutes') ? ["Speaking", "speaking"] :
             ["Done", "done"]
    })();
    return (
      <tr className={classname}>
        <ContentEditable
          html={this.state.name || this.props.speakerId.toString()}
          tagName="td"
          onChange={this.changeName}
        />
        {this.props.showNames && <ContentEditable tagName="td" html={this.state.name} onChange={this.changeName} />}
        <td>{this.props.drawTime.format("hh:mm")}</td>
        <td>{this.props.releaseTime.format("hh:mm")}</td>
        <td>{this.props.speakTime.format("hh:mm")}</td>
        <td>{status}</td>
      </tr>
    )
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  }

}

export default TimerRow;