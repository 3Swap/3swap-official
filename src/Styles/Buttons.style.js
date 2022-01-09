import styled from "styled-components";
import {  SecondaryColor, SplashColor } from "../Assets/Utility";

export const Primary = styled.div`
	a {
		border: none;
		outline: none;
		background: ${SplashColor};
		padding: 10px 20px;
		border-radius: 5px;
		font-weight: bold;
	}
	button {
		border: none;
		outline: none;
		background: ${SplashColor};
		padding: 10px 20px;
		border-radius: 5px;
		font-weight: bold;
	}
`;
export const Secondary = styled.div`
margin-top: 30px;
	a {
		border: none;
		outline: none;
		background: ${SecondaryColor};
		color: ${SplashColor};
		padding: 10px 20px;
		border-radius: 5px;
		font-weight: bold;
	}
	button {
		border: none;
		outline: none;
		background: ${SecondaryColor};
		color: ${SplashColor}
		padding: 10px 20px;
		border-radius: 5px;
		font-weight: bold;
	}
`;