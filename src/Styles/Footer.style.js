import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../Assets/Utility";

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	.footer-container {
		width: 70%;
		border-radius: 50px 50px 0 0;
		background: ${PrimaryColor};
		display: flex;
		flex-direction: column;
		padding: 50px 20px;
		align-items: center;
		color: white;
		.counter {
			display: flex;
            margin-bottom: 30px;
			.count-container {
				padding: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				.count {
					background: ${SecondaryColor};
                    width: 60px;
                    height: 60px;
                    display:flex;
                    justify-content: center;
                    align-content: center;
					padding: 10px;
				}
			}
		}
	}
`;

export default FooterWrapper;
