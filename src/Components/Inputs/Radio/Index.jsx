import * as S from "./Styles";

export default function Input(
  { name, label, value, checked, type, onChange = () => {} },
  props
) {
  return (
    <S.InputContainer>
      <S.Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <S.Label>{label}</S.Label>
    </S.InputContainer>
  );
}
