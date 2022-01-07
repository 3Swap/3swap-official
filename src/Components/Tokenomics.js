import TokenomicsWrapper from "../Styles/Tokenomics.style";

function Tokenomics() {
	return (
		<TokenomicsWrapper>
			<div className="tokenomics-container">
				<div className="tokenomics">
					<h1>Tokenomics</h1>
					<p>
						3Swap (SAP) <br /> Total supply: 1,000,000,000 SAP
					</p>
					<div className="details">
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#fce8a5" />
							</svg>
							<h3>Presale.</h3>
						</div>
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#fcbca5" />
							</svg>

							<h3>Liquidity vesting.</h3>
						</div>
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#B9FCA5" />
							</svg>

							<h3>Team and advisors.</h3>
						</div>
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#FCA5EA" />
							</svg>

							<h3>Public sale.</h3>
						</div>
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#A5FCFC" />
							</svg>

							<h3>Community incentives.</h3>
						</div>
						<div className="container">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
								<circle cx="15" cy="15" r="15" fill="#BFA5FC" />
							</svg>

							<h3>Ecosystem development reserve and marketing </h3>
						</div>
					</div>
				</div>
			</div>
			<div className="tokenomics-container"></div>
		</TokenomicsWrapper>
	);
}

export default Tokenomics;
