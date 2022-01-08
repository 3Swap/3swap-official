import styled from "styled-components";
import { PrimaryColor, SplashColor } from "../Assets/Utility";

const SocialMediaWrapper = styled.div`
	display: flex;
	padding: 50px 20px;
	background: ${PrimaryColor};
    position:relative;
    .quote-icon{
        position: absolute;
        left: 670px;
        top:-150px;
        width: 550px;
    }
	.social-container {
		.content-wrapper {
			h1 {
				width: 600px;
				font-size: 32px;
				color: ${SplashColor};
                font-weight: 900;
			}
			p {
				font-size: 18px;
				width: 500px;
				margin: 20px 0;
				color: white;
			}
		}

		.icon-wrapper {
			width: 600px;
            margin-top: 150px;
            display: flex:
            flex-wrap: wrap;
            align-items:center;
            a{
                padding: 10px;
                img{
                    width: 30%;
                    height: 50px;
                    object-fit: contain;
                }
                :nth-child(7){
                   margin-left: 30%;
                }
            }
		}
	}
`;

export default SocialMediaWrapper;
