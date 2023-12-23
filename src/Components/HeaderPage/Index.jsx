import * as S from "./Styles";

export default function HeaderPage({ nameSchool }) {
  return (
    <S.Header>
      <S.NameSchool>{nameSchool}</S.NameSchool>
    </S.Header>
  );
}
