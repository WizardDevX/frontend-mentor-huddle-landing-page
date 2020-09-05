import styled from "styled-components";

export const Card = styled.article`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 3em auto;
	padding: 10% 5%;
	width: 90%;
	min-height: 520px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px -5px ${({ theme }) => theme.colors.grayBlue};

	& img {
		width: 90%;
		height: 50%;
		object-fit: contain;
	}

	& h2 {
		font-size: 1.5em;
		margin: 2em 0 0.5em 0;
		color: ${({ theme }) => theme.colors.darkCyan};
	}

	& p {
		font-size: 1.1em;
		color: ${({ theme }) => theme.colors.grayBlue};
	}

	@media screen and (min-width: 768px) {
		& {
			padding: 5%;
			flex-wrap: nowrap;
			justify-content: space-around;
			text-align: start;
		}

		& img {
			width: 40%;
			height: 100%;
			object-fit: contain;
		}

		& div {
			width: 50%;
		}

		&:nth-of-type(1) {
			margin-top: 6em;
		}

		&:nth-of-type(odd) {
			flex-direction: row-reverse;
		}
	}

	@media screen and (max-width: 375px) {
		& h2 {
			margin-top: 0;
		}
	}
`;
