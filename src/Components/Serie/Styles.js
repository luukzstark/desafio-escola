import styled from "styled-components";

import {
  PiArrowCounterClockwise,
  PiDotsSixVerticalLight,
} from "react-icons/pi";
import { VscEye } from "react-icons/vsc";
import { TbExternalLink } from "react-icons/tb";

export const SerieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 453px;
  box-sizing: border-box;
  gap: 16px;
`;

export const SerieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  h1 {
    font-family: "Segoe UI";
    font-size: 28px;
    font-weight: 600;
    color: #3b3e42;
  }
`;

export const PiArrowCounterClockwiseIcon = styled(PiArrowCounterClockwise)`
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  color: #999999;
  border: 1px solid #999999;
`;

export const SerieBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  gap: 32px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 2px 5px 1px #5a676a0d;
  box-shadow: 0px 1px 1px 0px #3a3a441a;
`;

export const Chapter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;

export const HeaderChapter = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const BodyChapter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

export const ItemBodyChapter = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 8px;
  background-color: #f5f5f5;
  padding: 12px 8px;
  border-radius: 4px;
`;

export const Item_col_1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NumberOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Item_col_2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PiDotsSixVerticalLightIcon = styled(PiDotsSixVerticalLight)``;
export const VscEyeIcon = styled(VscEye)``;
export const TbExternalLinkIcon = styled(TbExternalLink)``;
