import { Logo } from "../Assets/Utility";
import { Primary } from "../Styles/Buttons.style";
import NavWrapper from "../Styles/Nav.style";

function Nav() {
    return (
			<NavWrapper>
				<img src={Logo} alt="" className="Logo" />
				<div className="nav-items">
					<a href="#Home">Home</a>
					<a href="#About">About</a>
					<a href="#Tokenomics">Tokenomics</a>
					<a href="#Roadmap">Roadmap</a>
					<a href="#Features">Features</a>
					<a href="#ICO">ICO</a>
					<a href="#Team">Team</a>
					<Primary>
						<button>Connect wallet</button>
					</Primary>
				</div>
			</NavWrapper>
		);

}

export default Nav;