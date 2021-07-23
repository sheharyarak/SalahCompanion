import React, {useState} from 'react';

class RadioButton extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		const selected = () => {
			if (this.props.checked) {
				return "Selected"
			} else {
				return "";
			}
		}
		// console.log("rendered Option" + selected());
		// console.log("value: "+ this.props.value);
		// console.log("checked: "+ this.props.checked);
		return (
			<button 
			className={this.props.className + selected()}
			onClick={this.props.onClick}
			value={this.props.value}
			checked={this.props.checked}
			>
				{this.props.children}
			</button>
		)
	}
}

function RadioSelector (props) {
	const [selectedValue, setSelectedValue] = useState();

	const callback = (e) => {
		setSelectedValue(e.target.value);
	}

	// console.log("renderedSelector");
	// console.log("selectedValue: " + selectedValue);
	return (
		<div className="RakatSelector">
			<RadioButton
			className="RakatOption"
			value={2}
			checked={selectedValue == 2}
			onClick={callback}
			>2</RadioButton>
			<RadioButton
			className="RakatOption"
			value={3}
			checked={selectedValue == 3}
			onClick={callback}
			>3</RadioButton>
			<RadioButton
			value={4}
			checked={selectedValue == 4}
			className={"RakatOption"}
			onClick={callback}
			>4</RadioButton>
			<input type="hidden" name="rakats" value={selectedValue}/>
		</div>
	)
}

export default RadioSelector;