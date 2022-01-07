import styled from "styled-components";
import { SplashColor, SponsorBg } from "../Assets/Utility";

const HeroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 90vh;
    position:relative;
	.cta-wrapper {
		padding-left: 30px;
		h1 {
			width: 65%;
			font-size: 50px;
			font-weight: 900;
			margin-top: 40px;
            color: black;
		}
		.cta-container {
			width: 40%;
			margin-left: 200px;
			margin-top: 20px;
			p {
				font-size: 24px;
				margin-bottom: 20px;
			}
		}
		.hero-arrow {
			position: absolute;
			width: 100px;
			margin-top: 20px;
			margin-left: 50px;
		}
	}
	.sponsors {
		background: purple;
		padding: 50px;
		padding-bottom: 80px;
		margin-top: 50px;
		/* width: 70%; */
		background: url(${SponsorBg});
		background-size: cover;
		h3 {
			color: ${SplashColor};
			position: absolute;
			margin-top: 35px;
		}
		.logo-container {
			margin-top: 100px;
			margin-left: -50px;
			img {
				margin-left: 50px;
				height: 35px;
			}
		}
	}

	.hero-img {
        width: 45%;
		position: absolute;
		top: 10px;
        left: 65%;
	}
`;

export default HeroWrapper;
