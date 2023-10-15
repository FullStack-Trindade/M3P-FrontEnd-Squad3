import styled from "styled-components"

export const Form = styled.form`
	max-width: 500px;
	width: 22rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 0.5rem;
	background-color: #daecf7;
`

export const InputGroup = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
`

export const Label = styled.label`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
	font-size: 0.9rem;
`

export const Input = styled.input`
	display: flex;
	padding: 8px;
	align-items: flex-start;
	align-self: stretch;
	border-radius: 0.5rem;
	border: 1px solid #5f6ab9;
	outline: none;
	color: #524fa1;
	font-size: 1rem;

	&::placeholder {
		color: #5f6ab9;
	}
`

export const Small = styled.small`
	color: #fb6467;
`

export const Submit = styled.button`
	padding: 0.5rem;
	width: 100%;
	font-weight: bold;

	border-radius: 6px;
	outline: none;
	border: 0;
	color: #bbef89;
	background-color: #5f6ab9;

	&:hover {
		cursor: pointer;
		/* border: 1px solid #5F6AB9; */
		box-shadow: 3px 3px 5px rgba(95, 106, 185, 0.3);
	}
`

export const Link = styled.a`
	font-size: 0.7rem;
	text-decoration-line: none;
    position: relative;

	&::after {
		content: "";
		display: block;
		height: 1px;
		width: 0;
		background: #551A8B;
		margin-top: 2px;
		transition: 0.3s;
		position: absolute;
	}

    &:hover::after {
        width: 100%;
    }
`
