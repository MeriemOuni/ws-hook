import React, { useEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	// component did mount && component willmount
	useEffect(() => {
		console.log("Component did mount");
		return () => {
			console.log("component will unmout");
		};
	}, []);

	// component did update
	useEffect(() => {
		console.log("component did update");
	}, []);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Incremet</button>
			<h3>{count}</h3>
			<button onClick={() => count > 0 && setCount(count - 1)}>
				Decrement
			</button>
		</div>
	);
};

export default Counter;
