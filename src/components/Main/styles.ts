import styled from 'styled-components';

export const Container = styled.main`
	margin: 3rem auto 0 auto;
	padding: 6rem;
	background: #fff;
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
			gap: 2.5rem;
		}

		.period {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			span {
				font-size: 1rem;
			}
		}

		.inputs {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 0.3rem;

				label {
					font-size: 0.9rem;
				}

				input {
					width: 5rem;
					height: 2rem;
					border: 1px solid #ddd;
					border-radius: 1rem;
					background: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1rem;
				}
			}
		}

        .message {
            color: red;
            font-size: 0.85rem;
            font-weight: 600;
            position: absolute;
            top: 470px;
        }
	}

	.total {
		margin-top: 2rem;
		border-top: 1px solid #ddd;

		.result {
			width: 100vh;
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
				width: 5rem;
				height: 2rem;
				border: 0;
				border-radius: 1rem;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 1.5rem;
			}
		}
	}
`;

export const Buttons = styled.div`
	button {
		width: 7rem;
		height: 2rem;
		border: 0;
		border-radius: 1rem;
		background: #007ecc;
		color: #fff;
		font-size: 1rem;
		transition: 0.2s;

		&:hover {
			filter: brightness(0.8);
			width: 10rem;
		}
	}
`;
