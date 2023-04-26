import styled from "styled-components/native";
import colors from "../../global/colors";
import { fonts, size } from "../../global/typography";

export const BoxContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.blue};
`;

export const BoxHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.blue};
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: ${size.title};
  font-family: ${fonts.roboto};  
`;

export const BoxInputItem = styled.View`
  flex-direction: row;
  height: 70px;
  padding: 10px;
  justify-content: space-between;
  color: ${colors.gray};
`;

export const BoxTotalizers = styled.View`
  flex-direction: row;
`;

export const InputItem = styled.TextInput`
  width: 85%;
  border-radius: 3px;
  padding-left: 10px;
  background-color: ${colors.white};
  font-family: ${fonts.roboto};
  font-size: ${size.subtitle};
`;

export const ButtonAddItem = styled.TouchableOpacity`
  width: 13%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const PurchaseList = styled.FlatList`
  background-color: ${colors.white};
`;

export const BoxEmptyList = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const TextListEmpty = styled.Text`  
  color: ${colors.gray};
  font-family: ${fonts.roboto};
  font-size: ${size.subtitle};
`;
