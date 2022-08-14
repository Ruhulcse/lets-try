import Switch from "./Switch";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";
import "./AngadDl.css"
import AngadImg from "./Angad_Profile.jpg"
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

const StyledApp = styled.div`
min-height: 100vh;
text-align: center;
padding-top: 1rem;
background-color: ${(props) => props.theme.body};
`;
const Button = styled.div`
text-align: right;
padding-top: 2rem;
padding-right: 3rem;
background-color: ${(props) => props.theme.body};
`;
const Name = styled.h1`
margin: 1rem;
color: ${(props) => props.theme.title};
`;
const Info = styled.p`
margin: 1rem;
color: ${(props) => props.theme.subtitle};
`;
const darkTheme = {
    body: "#1c1c1c",
    title: "#fff",
    subtitle: "#b6b6b6",
    icon: "#b6b6b6",
};
const lightTheme = {
    body: "fff",
    title: "#1c1c1c",
    subtitle: "#333",
};

function AngadDl() {
    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark" );
    };

    return <>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div> 
            <Button>
            <SunIcon />
            <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
            <MoonIcon />
            </Button>
    <StyledApp>
        <img src={AngadImg} alt="Angad" height="15%" width="15%"/>
        <Name>Angad Basak</Name>
        <Info>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, pariatur?</Info>
        <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime enim cum vel aliquam iure. Dolores eaque similique accusamus sunt sed rem </Info>
    </StyledApp>
    </div>
    </ThemeProvider>
    
    </>

}
export default AngadDl;