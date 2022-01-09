import styled from "styled-components";

const WhyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 170px 50px;
	@media (max-width: 900px) {
		padding: 70px 30px;
	}
	.why-content {
		width: 400px;
		p {
			margin-bottom: 20px;
		}
	@media (max-width: 900px) {
		width:100%;

	}
	}
	.why-cards {
		display: flex;
		margin-top: 35px;
		margin-left: 100px;
		@media (max-width: 900px) {
			flex-direction: column;
			align-items:center;
			margin-left: -20px;
		}
		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 27%;
			height: 400px;
			background: #ffe4f5;
			padding: 30px 20px;
			position: relative;
			margin-left: 25px;
			@media (max-width: 900px) {
				width: 100%;
				margin-top: 20px;

			}
			.heading {
				display: flex;
				flex-direction: column;
				align-items: center;
				img {
					width: 50px;
				}
			}
			p {
				text-align: center;
				margin-top: 20px;
			}
			.card-arrow {
				position: absolute;
				align-self: flex-end;
				width: 35px;
				top: 85%;
			}
			:nth-child(2) {
				background: #e4d0ff;
			}
			:nth-child(3) {
				background: #fff8e2;
			}
		}
	}
`;
export default WhyWrapper;
