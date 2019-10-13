/**
 * Displays the distance slider
 */
import React from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

type DistanceProps = {
  zipCode: number | null
  onDistanceSelection: (distance: number) => void
}

type DistanceState = {
  zipCode: number | null
  distance: number
};

const getInitialState = (props: DistanceProps): DistanceState => {
  return {
    zipCode: props.zipCode,
    distance: 30
  }
};

export class DistanceFilter extends React.Component<DistanceProps> {
  readonly state = getInitialState(this.props);

  handleOnChange = (value: number) => {
    this.setState({
      distance: value
    })
  };

  handleChangeComplete = () => {
    // console.log("state & props in complete");
    // console.log(this.state);
    // console.log(this.props);
    if (this.props.zipCode !== this.state.zipCode) {
      this.setState({
        zipCode: this.props.zipCode
      });
    }

    this.props.onDistanceSelection(this.state.distance);
  };

  distanceText = () => {
    console.log(`Distance from ${this.state.zipCode} is ${this.state.distance}`);
    if (this.props.zipCode !== null) {
      if (this.state.distance === 30) {
        return `ALL MILES FROM ${this.props.zipCode}`
      } else {
        return `CURRENT: ${this.state.distance} MILES FROM ${this.state.zipCode}`
      }
    }
    return '';
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let { distance } = this.state;

    return (
      <div className='slider'>
        <h3>Distance</h3>
        <Slider
          value={distance}
          onChange={this.handleOnChange}
          onChangeComplete={this.handleChangeComplete}
          min={5}
          max={30}
          step={5}
          labels={
            {
            5: '5',
            10: '10',
            15: '15',
            20: '20',
            25: '25',
            30: 'All'
            }}
        />
        <p className='distance-text'>{this.distanceText()}</p>
      </div>
    )
  }
}

export default DistanceFilter;
