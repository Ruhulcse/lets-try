import styled from 'styled-components';

export const Title = styled.div`

h3{
        color: ${(props)=> props.theme.h3};
        font-size: 35px;
        margin-bottom: 5px;
    }
    
h1{
        color: ${(props)=> props.theme.h1};
        font-size: 60px;
        font-weight: 1000;
        margin-top: 2px;
        margin-left: 100px;
        display: block;
    }
    
`