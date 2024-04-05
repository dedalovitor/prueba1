import React from "react";
import ButtonHello from "./buttonHello";
import LikesCounter from "./likescounter";
import Temporizador from "./temporizador";
import Input from "./input";
import Modal from "./modal";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<br />
			<br />
			<br />
			<br />
			<ButtonHello></ButtonHello>
			<br />
			<br />
			<br />
			<br />
			<LikesCounter></LikesCounter>
			<br />
			<br />
			<br />
			<br />
			<Temporizador></Temporizador>
			<br />
			<br />
			<br />
			<br />
			<Input></Input>
			<br />
			<br />
			<br />
			<br />
			<Modal></Modal>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Home;
