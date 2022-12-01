import React from 'react';

function Footer () {
    return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/CrisGraciano"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/cristobal-graciano-a27814170/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.youtube.com/channel/UCo1MhTR0ZrtcsbBsmWJCn7w"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/youtube-logo.png")}
						alt="Youtube"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;