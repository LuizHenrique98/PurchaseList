import styled from "styled-components/native";
import colors from "../../global/colors";
import { fonts, size } from "../../global/typography";

export const Container = styled.View``;

export const BoxModal = styled.Modal``;

export const BoxContainerModal = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: "rgba(0, 0, 0, 0.4)";
`;

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
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`  
  border-radius: 3px;
  padding-left: 10px;
  background-color: ${colors.white};
  font-family: ${fonts.roboto};
  font-size: ${size.subtitle};
  margin-bottom: 20px;
  max-width: 100%;
  border: 1px;
  border-color: ${colors.gray};
  border-radius: 5px;
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
