import React, {useState} from 'react';

class RadioButton extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		// const selected = () => {
		// 	if (this.props.checked) {
		// 		return " Selected"
		// 	} else {
		// 		return "";
		// 	}
		// }
		// console.log("rendered Option" + selected());
		// console.log("value: "+ this.props.value);
		// console.log("checked: "+ this.props.checked);
		return (
			<button 
			className={this.props.className}// + selected()}
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
		// console.log(`e.target.value:`);
		// console.log(e.target);
		setSelectedValue(e.target.value);
	}

	// console.log("renderedSelector");
	// console.log("selectedValue: " + selectedValue);
	return (
		<div className="Selector">
			<RadioButton
			className="Rakat Option"
			value={2}
			// checked={selectedValue == 2}
			onClick={callback}
			>2</RadioButton>
			<RadioButton
			className="Rakat Option"
			value={3}
			// checked={selectedValue == 3}
			onClick={callback}
			>3</RadioButton>
			<RadioButton
			value={4}
			// checked={selectedValue == 4}
			className={"Rakat Option"}
			onClick={callback}
			>4</RadioButton>
			<RadioButton
			value={"3 (وتر‎)"}
			// checked={selectedValue == "3 (وتر‎)"}
			className={"Salat Option"}
			onClick={callback}
			>
				Vitr <span className="arabic">وتر</span>
			</RadioButton>
			<RadioButton
			value={"2 (نفل)"}
			// checked={selectedValue == "4 (جُمُعَة)"}
			className={"Salat Option"}
			onClick={callback}
			>Nafl <span className="arabic">نفل</span></RadioButton>
			<input type="hidden" name="rakats" value={selectedValue}/>
		</div>
	)
}

export default RadioSelector;