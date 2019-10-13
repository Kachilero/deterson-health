/**
 * Gender Filter
 */
import React from "react";

type GenderFilterProps = {
  onGenderSelection: (gender: "Male" | "Female" | "default") => void
}
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
    const eventValue = changeEvent.target.value;
    // We'll ignore the next line because it's trying to type it to a string
    // even though the string is the literal we're looking for
    //@ts-ignore
    this.props.onGenderSelection(eventValue);
    this.setState({
      selectedOption: eventValue
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
                value="Male"
                checked={this.state.selectedOption === "Male"}
                onChange={e => this.handleOptionsChange(e)}
                className="input-group--item"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.selectedOption === "Female"}
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
