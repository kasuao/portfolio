import React, { Component } from "react";

class Skills extends Component {

	render(){

		return (
				<div className="skills">
					<h2>Skills and Experience</h2>
					<div className="skillBlock">
					<h1 className="glyphicon glyphicon-briefcase"></h1>
					<h4>Design</h4>
					
					<p>I am an artist, graphic designer, and web designer with 10+ years experience.</p>
					</div>
					<div className="skillBlock">
					<h4>Frontend</h4>
					I have experience with jQuery, React, JSX, Express, Bootstrap, and Materialize.
					</div>
					<div className="skillBlock">
					<h4>Backend</h4>
					I have experience with Node.js, MySQL, Sequelize, MongoDB Mongoose, and Git.
					</div>
				</div>
			)
	}
}

export default Skills;