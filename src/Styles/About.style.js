import styled from "styled-components";
import { PrimaryColor, SplashColor } from "../Assets/Utility";

const AboutWrapper = styled.div`
	padding: 20px;
	background: ${PrimaryColor};
	.about-container {
		width: 60%;
        margin-left: 30px;
        margin-top: 60px;

		h4 {
			color: ${SplashColor};
		}
		h1 {
			color: white;
			font-size: 45px;
			width: 60%;
		}
		p {
			font-size: 18px;
            width: 90%;
			color: #dedede;
		}
	}
`;

export default AboutWrapper;
