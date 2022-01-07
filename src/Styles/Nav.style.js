import styled from "styled-components";
import { NavBg } from "../Assets/Utility";
const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	padding-top: 0;
	padding-right:0;
	.Logo {
		width: 200px;
	}
	.nav-items {
		display: flex;
		padding: 20px;
		padding-left:65px;
		background: url(${NavBg});
		background-size: 1000px;
		background-repeat: no-repeat;
		background-position: -10px -20px;
		a {
			padding: 10px;
			color:white;
		}
	}
`;

export default NavWrapper;
