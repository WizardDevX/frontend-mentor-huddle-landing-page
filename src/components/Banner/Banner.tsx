import React from "react";
import {
	BannerContainer,
	Nav,
	Logo,
	TopButton,
	Button,
	BannerLeftStyled,
	Mockups,
} from "./styles";

import { css } from "styled-components";

const BannerLeft = () => {
	return (
		<BannerLeftStyled>
			<h1>Build The Community Your Fans Will Love</h1>
			<p>
				Huddle re-imagines the way we build communities. You have a
				voice, but so does your audience. Create connections with your
				users as you engage in genuine discussion.
			</p>
			<Button href="/">Get Started For Free</Button>
		</BannerLeftStyled>
	);
};

const Banner = () => {
	return (
		<BannerContainer>
			<Nav>
				<a
					href="/"
					css={css`
						display: flex;
						align-items: center;
						height: 40px;
					`}>
					<Logo />
				</a>
				<TopButton href="/">Try it free</TopButton>
			</Nav>
			<BannerLeft />
			<Mockups>
				<img src="/img/illustration-mockups.svg" alt="mockups" />
			</Mockups>
		</BannerContainer>
	);
};

export default Banner;
