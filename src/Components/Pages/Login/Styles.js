import styled from 'styled-components'
import Background from '../../Images/Background.png'

export const Page = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${Background});
background-color: #f5f5f5;
`;

export const UserArea = styled.div`
display: flex;
flex-direction: column;
width: 433px;
height: 420px; 
border-radius: 16px;
padding: 48px; 
gap: 10px; 
background-color: #fff;
box-shadow: rgba(60,64,67, 0.3) 0px 1px 2px 0px,
    rgba(60,64,67,0.15) 0px 2px 6px 2px;
    box-sizing: border-box;
`;

export const Logo = styled.img `
width: 176px;
height: 32px;
`;

export const SubTitle = styled.h2`
font-family: Neue Machina;
font-size: 18px;
font-weight: 400;
color: #3b3e42;
`;

export const Form = styled.form `
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 10px;


button {
    margin-top: 34px;
}
`;