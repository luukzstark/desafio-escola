import React from 'react'
import Logo from '../../Images/Logo.png'
import * as S from './Styles'
import Text from '../../Inputs/Text/Index'
import Button from '../../Button/Index'

export default function Login() {
    return(
        <S.Page>
            <S.UserArea>
                <S.Logo src={Logo} />
                <S.SubTitle>Desafio Trainee</S.SubTitle>

                <S.Form onSubmit={() => {}}>
                <Text 
                label="Email"
                name="email"
                placeholder="Seu email institucional"
                />
                <Text
                label="Senha"
                name="password"
                type="password"
                placeholder="Minimo de 8 caracteres"
                />
                <Button type="submit" label="Entrar" />
                </S.Form>
            </S.UserArea>
        </S.Page>
    )
}