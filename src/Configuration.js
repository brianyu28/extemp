import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import TimePicker from 'react-time-picker';

class Configuration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showConfigs: false
    };
  }

  render() {
    return (
      <div>
        <ContentEditable tagName="h1" html={"Extemp Timer"} />
        <div>
          <div>
            Round Begins At
          </div>
          <TimePicker
            className="time-picker"
            value={this.props.startTime.format("HH:mm")}
            disableClock={true}
            onChange={this.props.setStartTime}
          />
        </div>
        {this.state.showConfigs ? this.renderConfigs() : this.renderConfigButton()}
      </div>
    );
  }

  renderConfigs() {
    return (
      <div>
        <div className="configurations">
          <div>
            Draw Interval
            <br/>
            <input name="drawInterval" value={this.props.drawInterval} onChange={this.props.onConfigChange} type="number" />
          </div>
          <div>
            Release Interval
            <br/>
            <input name="releaseInterval" value={this.props.releaseInterval} onChange={this.props.onConfigChange} type="number" />
          </div>
          <div>
            Call Interval
            <br/>
            <input name="callInterval" value={this.props.callInterval} onChange={this.props.onConfigChange} type="number" />
          </div>
          <div>
            Speakers
            <br/>
            <input name="speakers" value={this.props.speakers} onChange={this.props.onConfigChange} type="number" />
          </div>
        </div>
        <div>
          <button onClick={this.toggleShowConfigs}>Done</button>
        </div>
      </div>
    )
  }

  renderConfigButton() {
    return (
      <div>
        <button onClick={this.toggleShowConfigs}>Configure</button>
      </div>
    );
  }

  toggleShowConfigs = () => {
    this.setState(state => ({
      showConfigs: !state.showConfigs
    }));
  }
}

export default Configuration;