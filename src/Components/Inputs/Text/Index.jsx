import {useState} from "react";
import * as S from './Styles';
export default function Text({name, label, type, placeholder}, props) {
    const[visibility, setvisibility] = useState(false);

    const handleVisibility = () => {
        setvisibility(!visibility);
    };

    return(
        <S.InputContainer>
            <S.Label htmlfor={name}>{label}</S.Label>
            <S.Input
            {...props}
            name={name}
            type={visibility && type === "password" ? "text" : type ?? "text"}
            placeholder={placeholder}
            />
            {type === "password" && (
                <>
                    {visibility ? (
                        <S.IoIosEyeIcon onClick={handleVisibility} />
                    ) : (
                        <S.IoIosEyeOffIcon onClick={handleVisibility} /> 
                    )}
                </>
            )}
        </S.InputContainer>
    )
}