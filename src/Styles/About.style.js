import styled from "styled-components";
import { PrimaryColor, SplashColor } from "../Assets/Utility";

const AboutWrapper = styled.div`
	padding: 20px;
	padding-bottom: 40px;
	background: ${PrimaryColor};
	.about-container {
		width: 60%;
		margin-left: 30px;
		margin-top: 60px;
		@media (max-width: 900px) {
			width: 100%;
			margin-left: 10px;
		}

		h4 {
			color: ${SplashColor};
		}
		h1 {
			color: white;
			font-size: 45px;
			width: 60%;
			@media (max-width: 900px) {
				width: 90%;
				font-size: 32px;
			}
		}
		p {
			font-size: 18px;
			width: 90%;
			color: #dedede;
		}
	}
`;

export default AboutWrapper;
