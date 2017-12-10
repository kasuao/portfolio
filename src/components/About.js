import React, { Component } from "react";

class About extends Component {

	render(){

		return (
				<div className="about">
					<div className="row">
						<div className="col-sm-3">
							<img src="./images/work-profile_pic.jpg" />
						</div>

						<div className="col-sm-9">
							<h2>KELCEY ASUAO | Fullstack Web Developer | HTML5 | CSS3 | JavaScript | React JS | Node JS</h2>
						</div>
					</div>	
					<div className="row">
						<div className="col-sm-12">
							<h4>Skills</h4>
							<h1 className="glyphicon glyphicon-menu-down"></h1>
						</div>
					</div>
				</div>
			)
	}
}

export default About;