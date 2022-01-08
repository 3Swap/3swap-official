import { Hagglex, HeroArrow, HeroImg, Tatswap, Vefi } from "../Assets/Utility";
import { Primary } from "../Styles/Buttons.style";
import HeroWrapper from "../Styles/Hero.style";

function Hero() {
	return (
		<HeroWrapper>
			<div className="cta-wrapper">
				<h1>
					Decentralized Exchange With Extra Powers. Swap Two Tokens For One.
                </h1>
                <img src={HeroArrow} alt="" className="hero-arrow" />
				<div className="cta-container">
					<p>
						Swap tokens the way of the future, one click, more swaps, less fees
					</p>
					<Primary>
						<a href="#">See upcoming sales</a>
					</Primary>
				</div>
			</div>
			<div className="sponsors">
				<h3>Supported by</h3>
				<div className="logo-container">
					<img src={Vefi} alt="" />
					<img src={Hagglex} alt="" />
					<img src={Tatswap} alt="" />
				</div>
            </div>
            <img src={HeroImg} alt="" className="hero-img" />
		</HeroWrapper>
	);
}

export default Hero;
