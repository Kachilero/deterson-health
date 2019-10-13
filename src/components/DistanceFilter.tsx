/**
 * Displays the distance slider
 */
import React from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

type DistanceProps = {
  onDistanceSelection: (distance: number) => void
}

type DistanceState = {
  distance: number
};

const getInitialState = (props: DistanceProps): DistanceState => {
  return {
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
    this.props.onDistanceSelection(this.state.distance);
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
      </div>
    )
  }
}

export default DistanceFilter;
