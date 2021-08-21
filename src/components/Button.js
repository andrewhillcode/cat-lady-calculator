import styled from 'styled-components'

const Button = styled.button`
	color: ${props => props.theme.button.primary.color};
	background-color: ${props => props.theme.button.primary.backgroundColor};
    font-family: ${props => props.theme.typography.family.secondary};
    border-radius: ${props => props.theme.button.borderRadius};
`

export {
	Button
}

