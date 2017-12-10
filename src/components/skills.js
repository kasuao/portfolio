import React, { Component } from "react";

class Skills extends Component {

	render(){

		return (
				<div className="skills">
					<div className="row">
						<h2>Skills and Experience</h2>
						<p>I have been a web designer, computer teacher, and formally studied web development.</p>
					</div>
					<div className="row">
						<div className="skillBlock col-sm-4">
							<img src="./images/design.png"/>
							<h4>Design</h4>	
							<p>Tons of experience storyboarding, layout design, and designing with Adobe Illustrator and Photoshop.</p>
						</div>

						<div className="skillBlock col-sm-4">
							<img src="./images/frontend.png"/>
							<h4>Frontend</h4>
							I have experience with jQuery, React, JSX, Express, Bootstrap, and Materialize.
						</div>

						<div className="skillBlock col-sm-4">
							<img src="./images/backend.png"/>
							<h4>Backend</h4>
							I have experience with Node.js, MySQL, Sequelize, MongoDB Mongoose, and Git.
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h4>Projects</h4>
							<h1 className="glyphicon glyphicon-menu-down"></h1>
						</div>
					</div>
				</div>
			)
	}
}

export default Skills;