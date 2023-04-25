import styled from "styled-components/native";
import colors from "../../global/colors";
import { size, fonts } from "../../global/typography";

interface BoxContainerProps {
  checked: boolean;
}

interface NameItemPurchaseProps {
  checked: boolean;
}

export const BoxContainer = styled.View<BoxContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  border-radius: 3px;
  border: 1px;
  border-color: ${colors.gray};
  background-color: ${(props) =>
    props.checked ? colors.greenLight : colors.white};
  height: 70px;
`;

export const ButtonCheckedItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  width: 85%;
`;

export const NameItemPurchase = styled.Text<NameItemPurchaseProps>`
  font-size: ${size.title};
  font-family: ${fonts.roboto};
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => (props.checked ? colors.green : colors.gray)};
  text-decoration: ${(props) => (props.checked ? "line-through" : "")};
`;

export const ButtonRemoveItem = styled.TouchableOpacity`
  width: 15%;
`;
