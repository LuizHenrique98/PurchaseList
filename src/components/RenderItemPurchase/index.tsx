import React from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

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
  onLongPressCheckItem: () => void;
}

export default function RenderItemPurchase({
  data,
  onPressCheckItem,
  onPressRemoveItem,
  onLongPressCheckItem,
}: Props) {
  return (
    <S.BoxContainer checked={data.checked}>
      <S.ButtonCheckedItem
        onPress={onPressCheckItem}
        onLongPress={onLongPressCheckItem}
      >
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
        <Feather name="x-circle" size={30} color={colors.red} />
      </S.ButtonRemoveItem>
    </S.BoxContainer>
  );
}
