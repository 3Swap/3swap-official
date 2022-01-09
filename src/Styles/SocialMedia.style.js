import styled from "styled-components";
import { PrimaryColor, SplashColor } from "../Assets/Utility";

const SocialMediaWrapper = styled.div`
	display: flex;
	padding: 50px 20px;
	background: ${PrimaryColor};
    position:relative;
	@media (max-width: 900px) {
        flex-direction: column;
        align-content: center;
    }
    .quote-icon{
        position: absolute;
        left: 670px;
        top:-150px;
        width: 550px;
	@media (max-width: 900px) {
        display:none;
    }
    }
	.social-container {
		.content-wrapper {
			h1 {
				width: 600px;
				font-size: 32px;
				color: ${SplashColor};
                font-weight: 900;
	@media (max-width: 900px) {
        width: 100%;
        font-size:24px;
    }
			}
			p {
				font-size: 18px;
				width: 500px;
				margin: 20px 0;
				color: white;
	@media (max-width: 900px) {
        width:100%;
    }
			}
		}

		.icon-wrapper {
			width: 600px;
            margin-top: 150px;
            display: flex:
            flex-wrap: wrap;
            align-items:center;
	@media (max-width: 900px) {
        width:100%;
        margin-top: 50px;
    }
            a{
                padding: 10px;
                img{
                    width: 30%;
                    height: 50px;
                    object-fit: contain;
	@media (max-width: 900px) {
        width:40%;
    }
                }
                :nth-child(7){
                   margin-left: 30%;
                }
            }
		}
	}
`;

export default SocialMediaWrapper;
