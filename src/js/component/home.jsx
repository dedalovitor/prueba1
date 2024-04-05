import React from "react";
import ButtonHello from "./buttonHello";
import LikesCounter from "./likescounter";

//create your first component
const Home = () => {
	return (
		<>
			<ButtonHello></ButtonHello>
			<br />
			<br />
			<br />
			<br />
			<LikesCounter></LikesCounter>
		</>
	);
};

export default Home;
