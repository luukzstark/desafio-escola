import styled from 'styled-components';
import {IoIosEye, IoIosEyeOff} from 'react-icons/io';

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
position: relative;
`;
export const Label = styled.label`
font-size: 16px;
border-bottom: 8px;
color: #3b3e42;
font-weight:400;
font-family: "Segoe UI";
`;

export const Input = styled.input`
font-size:18px;
border-radius: 4px;
border: 1px solid #00000040;
padding: 12px;

&:focus{
    outline:none;
    border-color:#00718a;
}
`;

export const IoIosEyeIcon = styled(IoIosEye)`
cursor: pointer
font-size: 24px;
position: absolute;
right: 8px;
top: 36px;
color: #8c939d;
`;

export const IoIosEyeOffIcon = styled(IoIosEyeOff)`
cursor: pointer;
font-size: 24px;
position: absolute;
right: 8px;
top: 36px;
color: #8c939d;`

