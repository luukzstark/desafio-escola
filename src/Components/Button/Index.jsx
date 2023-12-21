import * as S from './Styles';
export default function Button({ label, type = "button", onClick = () => {}}) {
    return(
        <S.Button type={"button"} onClick={onClick}>
            {label}
        </S.Button>
    )
}