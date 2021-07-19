import styled from 'styled-components';

export const Selection = styled.div`
	margin: 1.5rem auto 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	h2 {
		font-size: 1.7rem;
		font-weight: 400;
		color: #fff;
	}

	form {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			input {
				border: 0;
			}

			label {
				margin-top: 0.2rem;
				font-size: 1rem;
				font-weight: 400;
				color: #fff;
			}
		}
	}

	@media (max-width: 1200px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	@media (max-width: 800px) {
		flex-direction: column;

		form {
			gap: 0.5rem;

			div {
				margin-left: 1rem;
				margin-right: 1rem;

				input {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
`;

export const Container = styled.main`
	margin: 1.5rem auto 3rem auto;
	padding: 6rem;
	background: #eee;
	border-radius: 1rem;
	padding: 2rem;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h2 {
			font-size: 1.7rem;
			font-weight: 400;
		}

		.content {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin: 2rem;
			gap: 3rem;
		}

		.period {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;

			span {
				font-size: 1rem;
				font-weight: 400;
				width: 100%;
				text-align: center;
				border-bottom: 1px solid #ccc;
				padding-bottom: 0.8rem;
			}
		}

		.inputs {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.8rem;

				label {
					font-size: 0.9rem;
					font-weight: 400;
				}

				input {
					width: 7rem;
					height: 2rem;
					border: 1px solid #ccc;
					border-radius: 1rem;
					background: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1rem;
					font-weight: 400;
					text-align: center;
					padding: 1rem;

					&:focus {
						outline: none;
						border: 1px solid #007ecc;
					}
				}
			}
		}

		.message {
			color: red;
			font-size: 0.85rem;
			font-weight: 600;
			margin-top: 1rem;
		}
	}

	.total {
		margin-top: 2rem;
		border-top: 1px solid #ccc;
		width: 100%;

		.result {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 2rem;
			gap: 1rem;

			h2 {
				font-size: 1.7rem;
				font-weight: 400;
			}

			span {
				background: #eee;
				font-size: 1.7rem;
			}
		}
	}

	@media (max-width: 1200px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	@media (max-width: 800px) {
		form {
			.content {
				display: flex;
				flex-direction: column;
			}

			h2 {
				font-size: 1.4rem;
			}
		}
	}

	@media (max-width: 480px) {
		.total {
			.result {
				flex-direction: row;
				justify-content: space-between;

				h2 {
					font-size: 1.2rem;
				}
			}
		}
	}
`;

export const Buttons = styled.div`
	button {
		width: 10rem;
		height: 2rem;
		border: 0;
		border-radius: 1rem;
		background: #007ecc;
		color: #fff;
		font-size: 1rem;
		transition: 0.2s;

		&:hover {
			filter: brightness(0.8);
			width: 13rem;
		}

		&:focus {
			outline: none;
			border: 1px solid #007ecc;
		}
	}
`;
