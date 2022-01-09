import styled from "styled-components";
import { SplashColor, SponsorBg } from "../Assets/Utility";

const HeroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 90vh;
	position: relative;
	@media (max-width: 900px) {
		position: relative;
	}
	.cta-wrapper {
		padding-left: 30px;
		h1 {
			width: 65%;
			font-size: 50px;
			font-weight: 900;
			margin-top: 40px;
			color: black;
			@media (max-width: 900px) {
				font-size: 24px;
				width: 90%;
			}
		}
		.cta-container {
			width: 40%;
			margin-left: 200px;
			margin-top: 20px;
			@media (max-width: 900px) {
				margin-left: 80px;
				width: 70%;
			}
			p {
				font-size: 24px;
				margin-bottom: 20px;
				@media (max-width: 900px) {
					font-size: 16px;
				}
			}
		}
		.hero-arrow {
			position: absolute;
			width: 100px;
			margin-top: 20px;
			margin-left: 50px;
			@media (max-width: 900px) {
				width: 60px;
				margin-left: 10px;
			}
		}
	}
	.sponsors {
		background: purple;
		padding: 50px;
		padding-bottom: 80px;
		margin-top: 50px;
		background: url(${SponsorBg});
		background-size: cover;
		@media (max-width: 900px) {
			margin-top: 255px;
			padding-left: 20px;
			overflow: hidden;
			background-size: 1000px;
		}
		h3 {
			color: ${SplashColor};
			position: absolute;
			margin-top: 35px;
			@media (max-width: 900px) {
				margin-top: 25px;
			}
		}
		.logo-container {
			margin-top: 100px;
			margin-left: -50px;
			@media (max-width: 900px) {
				display: flex;
				margin-left: -20px;
				margin-top: 90px;
			}
			img {
				margin-left: 50px;
				height: 35px;
				@media (max-width: 900px) {
					height: 25px;
					margin-left: 20px;
				}
			}
		}
	}

	.hero-img {
		width: 45%;
		position: absolute;
		top: 10px;
		left: 65%;
		@media (max-width: 900px) {
			display: none;
		}
	}
	.mobile-hero-img {
		position: absolute;
		width: 100%;
		top: 250px;
		@media (min-width: 900px) {
			display: none;
		}
	}
`;

export default HeroWrapper;
