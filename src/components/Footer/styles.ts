import styled from "styled-components";
import { Logo, Button } from "../Banner/styles";
import { setBackgroundImage, mediaQuery } from "../../utils/styled";

export const StyledFooter = styled.footer`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.darkCyan};
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	padding: 5em 5% 0 5%;
	margin-top: 10em;

	& span {
		display: inline-block;
		margin: 1.5em 0;
		font-size: 1em;
		font-weight: 400;
		width: 100%;
		color: ${({ theme }) => theme.colors.cyan};
		text-align: center;
	}

	${mediaQuery("min", "768px")`
        & span {
            text-align: end;
        }
    `}

	${mediaQuery("min", "1300px")`
        justify-content: center;
    `}
    ${mediaQuery("min", "828px")`
        &  {
            justify-content: space-around;
        }
    `}
`;

export const WhiteLogo = styled(Logo)`
	margin-bottom: 1em;
	${setBackgroundImage("/img/logo2.svg", "contain")}
`;

export const Contact = styled.div`
	max-width: 345px;
	heigth: 200px;
	font-size: 1em;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.cyan};
	margin-bottom: 1em;

	& div {
		display: flex;
		align-items: center;
		margin-bottom: 1.5em;
	}

	& div img {
		align-self: start;
		height: 16px;
		width: 16px;
		margin-right: 1em;
	}

	& p {
		width: 100%;
	}
`;

export const List = styled.ul`
	display: block;
	max-width: 350px;
	width: 200px;
	height: 120px;
	font-size: 1.2em;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.cyan};
	list-style: none;

	& li {
		width: 100%;
		margin-bottom: 1em;
	}
`;

export const Icons = styled.div`
	text-align: center;
	font-size: 0.8em;
	color: ${({ theme }) => theme.colors.cyan};
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	width: 140px;
	margin: 2em auto 0 auto;

	& i {
		border: 1px solid ${({ theme }) => theme.colors.cyan};
		border-radius: 50%;
		padding: 5px;
		width: 25px;
		height: 25px;
	}

	& i:not(:last-of-type) {
		margin-right: 0.5em;
	}

	& i:last-child svg {
		margin-left: -1px;
	}

	${mediaQuery("min", "980px")`
        &  {
            margin: 0;
        }
    `}
	${mediaQuery("min", "768px")`
        &  {
            justify-content: flex-start;
        }
    `}
`;

export const FooterCard = styled.div`
	position: absolute;
	top: -15%;
	left: 50%;
	transform: translateX(-50%);
	min-width: 240px;
	width: 95%;
	max-width: 450px;
	padding: 1.5em;
	border-radius: 10px;
	background-color: #fff;
	text-align: center;
	box-shadow: 0px 0px 10px -5px ${({ theme }) => theme.colors.grayBlue};

	& h2 {
		font-size: 1.2em;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.darkCyan};
		line-height: 2em;
	}
`;

export const FooterCardButton = styled(Button)`
	${mediaQuery("max", "290px")`
        font-size: .8em;
    `}
`;
