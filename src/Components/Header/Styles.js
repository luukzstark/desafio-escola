import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  padding: 24px 60px;
  box-shadow: 0px 2px 5px 1px #5a676a0d;

  box-shadow: 0px 1px 1px 0px #3a3a441a;
`;

export const Col_1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 132px;
  height: 24px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: #e9e9e9;
`;

export const SubTitle = styled.h2`
  font-family: "Neue Machina";
  font-size: 20px;
  font-weight: 300;
  color: #3b3e42;
`;

export const Col_2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #e6f2fe;
  color: #82c1fc;
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 600;
  user-select: none;
`;

export const IoIosArrowDownIcon = styled(IoIosArrowDown)`
  font-size: 16px;
  color: #5c6270;
`;

export const MenuUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: absolute;
  width: 291px;
  gap: 8px;
  top: 72px;
  right: 60px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px #5a676a26;
  background-color: #fff;
`;

export const MenuUserContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 8px;
`;

export const MenuTitle = styled.h3`
  font-family: "Segoe UI";
  font-size: 16px;
  font-weight: 600;
  color: #5c6270;
`;

export const ButtonChange = styled.p`
  display: flex;
  font-family: "Segoe UI";
  font-size: 14px;
  font-weight: 600;
  color: #00718a;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonExit = styled.div`
  display: flex;
  text-align: center;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  color: #00718a;
  font-size: 14px;
  font-family: "Segoe UI";
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e9e9e9;
  box-sizing: border-box;

  &:hover {
    background-color: #00000005;
  }
`;
