import React from "react";
import {
	StyledFooter,
	Contact,
	WhiteLogo,
	List,
	Icons,
	FooterCard,
	FooterCardButton,
} from "./styles";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<StyledFooter>
			<FooterCard>
				<h2>Ready to Build Your Community?</h2>
				<FooterCardButton href="/">
					Get Started For Free
				</FooterCardButton>
			</FooterCard>

			<Contact>
				<WhiteLogo />
				<div>
					<img src="/img/icon-location.svg" alt="location" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua
					</p>
				</div>
				<div>
					<img src="/img/icon-phone.svg" alt="phone" />
					<p>+1-543-123-4567</p>
				</div>
				<div>
					<img src="/img/icon-email.svg" alt="email" />
					<p>example@huddle.com</p>
				</div>
			</Contact>
			<List>
				<li>About Us</li>
				<li>What We Do</li>
				<li>FAQ</li>
			</List>
			<List>
				<li>Career</li>
				<li>Blog</li>
				<li>Contact</li>
			</List>
			<Icons>
				<i>
					<FaFacebook />
				</i>
				<i>
					<FaTwitter />
				</i>
				<i>
					<FaInstagram />
				</i>
			</Icons>
			<span>© Copyright 2018 Huddle. All rights reserved.</span>
		</StyledFooter>
	);
};

export default Footer;
