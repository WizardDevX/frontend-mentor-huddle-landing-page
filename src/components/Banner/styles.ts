import styled from "styled-components";
import { setBackgroundImage } from "../../utils/styled";

export const BannerContainer = styled.header`
	position: relative;
	width: auto;
	height: 100vh;
	min-height: 640px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	padding: 0 5%;
	background-color: ${({ theme }) => theme.colors.cyan};
	${setBackgroundImage("/img/bg-hero-desktop.svg")}

	@media screen and (max-width: 768px) {
		& {
			height: 100%;
			flex-direction: column;
			${setBackgroundImage("/img/bg-hero-mobile.svg")}
		}
	}
`;

export const Nav = styled.nav`
	position: absolute;
	top: 5%;
	left: 5%;
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		& {
			top: 2%;
		}
	}

	@media screen and (max-width: 265px) {
		& {
			justify-content: center;
		}
	}
`;

export const Logo = styled.span`
	display: inline-block;
	width: 160px;
	height: 26px;
	${setBackgroundImage("/img/logo.svg", "contain")}

	@media screen and (max-width: 768px) {
		& {
			width: 120px;
			margin-top: 5px;
		}
	}
`;

export const TopButton = styled.a`
	display: inline-block;
	top: 5%;
	right: 5%;
	text-decoration: none;
	font-size: 1.3em;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.darkCyan};
	line-height: 2.5em;
	border-radius: 1.5em;
	background-color: #fff;
	padding: 0 2.8em;
	box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 768px) {
		& {
			padding: 0 1.5em;
			font-size: 1em;
		}
	}

	@media screen and (max-width: 240px) {
		& {
			margin: 0.5em auto 0 auto;
		}
	}
`;

export const Button = styled(TopButton)`
	line-height: 3em;
	font-size: 1em;
	margin-top: 0.5em;
	color: #fff;
	box-shadow: none;
	background-color: ${({ theme }) => theme.colors.primary};

	@media screen and (max-width: 768px) {
		& {
			width: 90%;
			max-width: 400px;
		}
	}

	@media screen and (max-width: 240px) {
		& {
			padding: 0;
		}
	}
`;

export const BannerLeftStyled = styled.section`
	width: 40%;

	& h1 {
		width: 80%;
		font-size: 2.5em;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.darkCyan};
		line-height: 1.5em;
		margin-bottom: 0.5em;
	}

	& p {
		font-size: 1.2em;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.darkCyan};
		line-height: 1.3em;
		margin-bottom: 0.5em;
	}

	@media screen and (max-width: 768px) {
		& {
			width: 100%;
			text-align: center;
			margin-top: 9em;
		}

		& h1 {
			width: 100%;
			font-size: 2em;
			margin-bottom: 1em;
		}

		& p {
			margin-bottom: 1em;
			padding: 0 4%;
		}
	}
`;

export const Mockups = styled.figure`
	width: 55%;
	height: 70vh;
	min-height: 205px;
	margin-top: 2em;
    margin-left: 4em;
    
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    @media screen and (max-width: 768px) {
		& {
            width: 90%;
            height: 35vh;
            margin: 0;
            margin-top: 3em;
            margin-bottom: 2em;
        }

`;
