import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

   
   body{
    background-color: ${(props)=> props.theme.bg};
   }
`