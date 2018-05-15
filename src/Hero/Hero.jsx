import React from "react";

import styles from "./Hero.module.scss";

const Hero = () => (
	<div className={styles.container}>
		<h1>
			<span className="logo">Clover</span>
			<br />
			<font color="#EF5934">is a Medicare Plan done differently.</font>
		</h1>
		<input type="color" />
	</div>
);

export default Hero;
