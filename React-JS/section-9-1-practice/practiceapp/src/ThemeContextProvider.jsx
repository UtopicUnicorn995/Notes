// Todo: Create & manage context in this file
import {createContext, useState} from 'react'


export const ThemeContext = createContext({toggleTheme: () => {}, themeMode: ''})


export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = useState('dark')
  
  function changeTheme(){
      if(theme === 'dark'){
          setTheme('light')
      }else{
          setTheme('dark')
      }
  }
  
  const themeValue = {
      toggleTheme: changeTheme,
      themeMode: theme
  }
  
  return <ThemeContext.Provider value={themeValue}>
  {children}
  </ThemeContext.Provider>
}
