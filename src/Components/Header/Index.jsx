import * as S from "./Styles";

import Logo from "../Images/Logo.png";
import { useState } from "react";
import Input from "../Inputs/Radio/Index";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Header>
      <S.Col_1>
        <S.Logo src={Logo} />
        <S.Divider></S.Divider>
        <S.SubTitle>Desafio Trainee</S.SubTitle>
      </S.Col_1>
      <S.Col_2
        onClick={handleMenu}
        style={{ backgroundColor: isOpen ? "#ccc" : "transparent" }}
      >
        <S.Avatar>L</S.Avatar>
        <S.IoIosArrowDownIcon />
      </S.Col_2>
      {isOpen && (
        <S.MenuUser>
          <S.MenuUserContent>
            <S.MenuTitle>Você está atualmente com</S.MenuTitle>
            <Input
              type="radio"
              name="typeProfile"
              value="admin"
              label="Acesso do Admin"
              checked={true}
              // onChange={this.onAddressChanged}
            />
            <Input
              type="radio"
              name="typeProfile"
              value="student"
              label="Acesso do Aluno"
              // checked={this.state.address === result.ADDRESS}
              // onChange={this.onAddressChanged}
            />

            <S.ButtonChange>Alterar</S.ButtonChange>
          </S.MenuUserContent>

          <S.ButtonExit>Sair</S.ButtonExit>
        </S.MenuUser>
      )}
    </S.Header>
  );
}
