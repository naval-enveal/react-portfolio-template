	import React from "react";
	import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

	import Card from "../common/card";

	import "./styles/works.css";

	const Works = () => {
		return (
			<div className="works">
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="./dml.ico"
									alt="facebook"
									className="work-image"
								/>
								<div className="work-title">Digimantra Labs</div>
								<div className="work-subtitle">
									Senior Software Engineer
								</div>
								<div className="work-duration">Jan 2025 - Present</div>
							</div>

							<div className="work">
								<img
									src="./01s.png"
									alt="twitter"
									className="work-image"
								/>
								<div className="work-title">01 Synergy</div>
								<div className="work-subtitle">
									Software Engineer
								</div>
								<div className="work-duration">Jan 2020 - Dec, 2024</div>
							</div>
						</div>
					}
				/>
			</div>
		);
	};

	export default Works;
