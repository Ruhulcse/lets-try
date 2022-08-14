import Bappy from "./components/faysal/Bappy";
import {Global} from './components/faysal/styled/Global.styled'
import { ThemeProvider } from "styled-components";
import React,{useState} from "react";
import './components/faysal/button.css'
import ToggleButton from "./components/faysal/ToggleButton";
const dark = {
  bg: '#202020',
  h1: 'aquamarine',
  h3: 'bisque',
  gd: 'linear-gradient(to bottom, #303030 -3%, #505050 100%)',
  p: '#C8C8C8'
}
const ligth = {
  bg: '#95B9C7',
  h1: '#4863a0',
  h3: '#566d7e',
  gd: 'linear-gradient(to bottom, #ccffcc 0%, #ccffff 100%);',
  p: 'black' 

}
function App() {
   const [theme, setTheme] = useState('ligth');
   const changeTheme =() => {
    theme === 'ligth' ? setTheme('dark') : setTheme('ligth');
   }
  
  return (
  <>
  <ThemeProvider theme={theme==='ligth' ? dark : ligth}>
  <Global/>
  <ToggleButton handle={changeTheme}/>
  <Bappy/>
  </ThemeProvider>
  </>
  );
  }

export default App;
