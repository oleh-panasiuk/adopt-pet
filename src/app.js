const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h2", {}, props.name),
		React.createElement("h3", {}, props.animal),
		React.createElement("h3", {}, props.color),
	])
}

const App = () => {
	return React.createElement(
		"div",
		{},
		[
			React.createElement("h1", {}, "Adopt Me!"),
			React.createElement(Pet, { name: "Dorian", animal: "Cat", color: "Red"}),
			React.createElement(Pet, { name: "Dorian", animal: "Cat", color: "Red"}),
			React.createElement(Pet, { name: "Dorian", animal: "Cat", color: "Red"}),
		]
	);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));