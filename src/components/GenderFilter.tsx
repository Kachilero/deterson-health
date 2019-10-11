/**
 * Gender Filter
 */
import React from "react";

type GenderFilterProps = {}
type GenderFilterState = {
  selectedOption: string
}

const getInitialState = (props: GenderFilterProps): GenderFilterState => {
  return {
    selectedOption: 'default'
  }
};

export class GenderFilter extends React.Component<GenderFilterProps> {
  readonly state = getInitialState(this.props);

  handleOptionsChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className='gender-filter'>
        <h3 className='heading'>Gender</h3>
        <form>
          <div className='input-group'>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.selectedOption === "male"}
                onChange={e => this.handleOptionsChange(e)}
                className="input-group--item"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.selectedOption === "female"}
                onChange={e => this.handleOptionsChange(e)}
                className="input-group--item"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="default"
                checked={this.state.selectedOption === "default"}
                onChange={e => this.handleOptionsChange(e)}
                className="input-group--item"
              />
              No preference
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default GenderFilter;
