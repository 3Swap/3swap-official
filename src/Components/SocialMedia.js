import {
	DiscordIcon,
	FacebookIcon,
	InstagramIcon,
	MediumIcon,
	QuoteIcon,
	TelegramIcon,
	TwitterIcon,
	YoutubeIcon,
} from "../Assets/Utility";
import { Primary } from "../Styles/Buttons.style";
import SocialMediaWrapper from "../Styles/SocialMedia.style";

function SocialMedia() {
	return (
		<SocialMediaWrapper>
			<div className="social-container">
				<div className="content-wrapper">
					<h1>
						Connect with us on any of our various media channels to get more
						updates about us
					</h1>
					<p>
						Feel free to ask us anything you want to know about our community,
						we very much available to answer all your questions.
					</p>
					<Primary>
						<a href="#">Shoot us an email</a>
					</Primary>
				</div>
			</div>
			<div className="social-container">
				<div className="icon-wrapper">
					<a href="#">
						<img src={InstagramIcon} alt="" />
					</a>
					<a href="#">
						<img src={TelegramIcon} alt="" />
					</a>
					<a href="#">
						<img src={TwitterIcon} alt="" />
					</a>
					<a href="#">
						<img src={FacebookIcon} alt="" />
					</a>
					<a href="#">
						<img src={DiscordIcon} alt="" />
					</a>
					<a href="#">
						<img src={YoutubeIcon} alt="" />
					</a>
					<a href="#">
						<img src={MediumIcon} alt="" />
					</a>
				</div>
            </div>
            <img src={QuoteIcon} alt="" className="quote-icon" />
		</SocialMediaWrapper>
	);
}

export default SocialMedia;
