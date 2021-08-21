import styled from 'styled-components'

const Label = styled.label`
	font-family:  ${props => props.theme.typography.family.secondary}, serif;
	color: ${props => props.theme.typography.main}
`

export {
	Label
}

