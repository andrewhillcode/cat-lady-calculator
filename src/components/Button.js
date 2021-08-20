import styled from 'styled-components'

const Button = styled.button`
	color: ${props => props.theme.button.primary.color};
	background-color: ${props => props.theme.button.primary.backgroundColor};
`

export {
	Button
}

