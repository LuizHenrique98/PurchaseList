import styled from "styled-components/native";
import colors from "../../global/colors";
import { fonts, size } from "../../global/typography";

export const BoxModal = styled.Modal``;

export const BoxContentModal = styled.View`
  background-color: ${colors.white};
  align-items: center;
  margin-top: 20%;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  padding: 20px;  
`;

export const Title = styled.Text`
  font-size: ${size.title};
  color: ${colors.gray};
  font-family: ${fonts.roboto};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${size.description};
  color: ${colors.gray};
  font-family: ${fonts.roboto};
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  margin-right: 5px;
  padding: 10px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${colors.red};
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  margin-left: 5px;
  padding: 10px;
`;

export const TextButtonConfirm = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${size.subtitle};
  font-family: ${fonts.roboto};
`;

export const TextButtonCancel = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${size.subtitle};
  font-family: ${fonts.roboto};
`;
