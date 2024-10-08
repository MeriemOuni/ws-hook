import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};
	return (
		<div className='App'>
			<h1>Workshop React Hooks</h1>
			<button onClick={handleClick}>toggle</button>
			{show && <Counter />}
		</div>
	);
}

export default App;
