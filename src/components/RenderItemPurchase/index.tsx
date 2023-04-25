import React from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../../global/colors";
import * as S from "./styles";

export interface RenderItemPurchaseProps {
  id: string;
  description: string;
  checked: boolean;
}

interface Props {
  data: RenderItemPurchaseProps;
  onPressCheckItem: () => void;
  onPressRemoveItem: () => void;
}

export default function RenderItemPurchase({
  data,
  onPressCheckItem,
  onPressRemoveItem,
}: Props) {
  return (
    <S.BoxContainer checked={data.checked}>
      <S.ButtonCheckedItem onPress={onPressCheckItem}>
        <MaterialCommunityIcons
          name={data.checked ? "checkbox-marked" : "checkbox-blank-outline"}
          size={30}
          color={data.checked ? colors.green : colors.gray}
        />
        <S.NameItemPurchase checked={data.checked}>
          {data.description}
        </S.NameItemPurchase>
      </S.ButtonCheckedItem>

      <S.ButtonRemoveItem onPress={onPressRemoveItem}>
        <MaterialCommunityIcons
          name="alpha-x-circle"
          size={30}
          color={colors.red}
        />
      </S.ButtonRemoveItem>
    </S.BoxContainer>
  );
}
