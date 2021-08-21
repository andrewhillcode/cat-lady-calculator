import { ThemeProvider } from 'styled-components'
import { Label } from './components/Label'
import { Button } from './components/Button'
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from 'react'

const lightTheme = {
  background: 'white',
  typography: {
    main: 'red',
    family: {
      primary: 'Patrick Hand',
      secondary: 'Patrick Hand SC'
    }
  },
  button: {
    primary: {
      backgroundColor: 'lightblue',
      color: 'black'
    }
  }
}

const darkTheme = {
  background: 'black',
  typography: {
    main: 'white',
    family: {
      primary: 'Patrick Hand',
      secondary: 'Patrick Hand SC'
    }
  },
  button: {
    primary: {
      backgroundColor: 'pink',
      color: 'black'
    },
    borderRadius: '4px'
  }
}

const brandTheme = {
  background: 'yellow',
  typography: {
    main: 'white',
    family: {
      primary: 'Patrick Hand',
      secondary: 'Patrick Hand SC'
    }
  },
  button: {
    primary: {
      backgroundColor: 'pink',
      color: 'black'
    }
  }
}


const availableThemes = [lightTheme, darkTheme, brandTheme]

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Patrick+Hand+SC&display=swap');

  body {
    font-family: ${props => props.theme.typography.family.primary};
    color: ${props => props.theme.typography.main};
    background-color: ${props => props.theme.background};
  }
`

const MainContent = styled.div`
  margin: 24px auto;
  max-width: 400px;
`

const Title = styled.div`
  text-align: center;
  font-size: 48px;
`


const App = () => {
  const [themeIndex, setThemeIndex] = useState(1)

  return (
    <ThemeProvider theme={availableThemes[themeIndex]}>
      <GlobalStyle />
      <MainContent>
        <Title>Cat Lady Calculator</Title>
        <Button onClick={() => {themeIndex === 2 ? setThemeIndex(0) : setThemeIndex(themeIndex + 1)}}>Change theme</Button>
        <div>
          <Label>Unused Food Count</Label>
        </div>    
        <div>
          <Label>Unfed Cats Count</Label>
        </div>  
        <div>
          <Label>Fed Cats Count</Label>
        </div>
        <div>
          <Label>Fed Cats Score</Label>
        </div>      
        <div>
          <Label>Catnip Count</Label>
        </div>
       <div>
          <Label>Costumes Count</Label>
        </div>
        <div>
          <Label>Toy Set A Count</Label>
        </div>
        <div>
          <Label>Toy Set B Count</Label>
        </div>
        <div>
          <Label>Toy Set C Count</Label>
        </div>
        <div>
          <Label>Toy Set D Count</Label>
        </div>
        <div>
          <Label>VP Token Count</Label>
        </div>
      </MainContent>
    </ThemeProvider>
  )
}

export {
  App
}
