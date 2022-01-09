import styled from "styled-components";

const TokenomicsWrapper = styled.div`
	display: flex;
	overflow: hidden;
	@media (max-width: 900px) {
		flex-direction: column;
		position: relative;
	}
	.tokenomics-container {
		padding: 40px;
		@media (max-width: 900px) {
			padding: 20px;
		}
		.chart {
			width: 700px;
			margin-top: 50px;
			@media (max-width: 900px) {
				width: 95%;
			}
		}
		.tokenomics {
			display: flex;
			flex-direction: column;
			margin-top: 50px;
			p {
				width: 290px;
			}
		}
		.details {
			margin-top: 20px;
			.container {
				display: flex;
				align-items: center;
				margin-top: 5px;
				svg {
					width: 20px;
					height: 20px;
				}
				h3 {
					margin-left: 10px;
					font-size: 20px;
					@media (max-width: 900px) {
						width: 70%;
						font-size: 18px;
					}
				}
			}
		}
	}
`;

export default TokenomicsWrapper;
