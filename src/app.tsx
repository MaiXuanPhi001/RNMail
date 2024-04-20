import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigations from './navs'
import light from '@/themes/light'
import { ThemeProvider } from '@shopify/restyle'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App