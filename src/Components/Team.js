import { Image1, Image2, Image3, Image4 } from "../Assets/Utility";
import TeamWrapper from "../Styles/Team.style";

function Team() {
	return (
		<TeamWrapper>
			<h1>Meet team 3Swap</h1>
			<div className="team-wrapper">
				<div className="team-container">
					<div className="avatar">
						<img src={Image1} alt="" />
					</div>
					<h1>James Emmanuel</h1>
					<h3>CEO</h3>
				</div>
				<div className="team-container">
					<div className="avatar">
						<img src={Image2} alt="" />
					</div>
					<h1>Kingsley Victor</h1>
					<h3>CTO</h3>
				</div>
				<div className="team-container">
					<div className="avatar">
						<img src={Image3} alt="" />
					</div>
					<h1>Mona Paul</h1>
					<h3>Project lead</h3>
				</div>
				<div className="team-container">
					<div className="avatar">
						<img src={Image4} alt="" />
					</div>
					<h1>Kue Barinor Paul ESQ</h1>
					<h3>Tech Lawyer</h3>
				</div>
			</div>
		</TeamWrapper>
	);
}

export default Team;
