import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

let planetas = planets.map((planet, i) => {
	return (
		<li className="list-group-item" key={i}>
			{planet}
		</li>
	);
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetas}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
