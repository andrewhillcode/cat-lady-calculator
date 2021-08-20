import { ThemeProvider } from 'styled-components'
import { Label } from './components/Label'
import { Button } from './components/Button'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'

const lightTheme = {
  background: 'white',
  typography: {
    main: 'red'
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
    main: 'white'
  },
  button: {
    primary: {
      backgroundColor: 'pink',
      color: 'black'
    }
  }
}

const brandTheme = {
  background: 'yellow',
  typography: {
    main: 'white'
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
  body {
    background-color: ${props => props.theme.background};
  }
`


const App = () => {
  const [themeIndex, setThemeIndex] = useState(1)

  return (
    <ThemeProvider theme={availableThemes[themeIndex]}>
      <GlobalStyle />
      <Button onClick={() => {themeIndex === 2 ? setThemeIndex(0) : setThemeIndex(themeIndex + 1)}}>Change theme</Button>
      <Label>what up</Label>
      <h1>Hello cat ladies</h1>
    </ThemeProvider>
  )
}

export {
  App
}
