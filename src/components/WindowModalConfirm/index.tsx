import React from "react";

import * as S from "./styles";

interface WindowModalConfirmProps {
  visible: boolean;
  title: string;
  description: string;
  titleButtonConfirm: string;
  titleButtonCancel: string;
  onPressConfirm: () => void;
  onPressCancel: () => void;
}

export default function WindowModalConfirm({
  visible,
  title,
  description,
  titleButtonConfirm,
  titleButtonCancel,
  onPressConfirm,
  onPressCancel,
}: WindowModalConfirmProps) {
  return (
    <S.BoxModal visible={visible} animationType="slide" transparent={true}>
      <S.BoxContentModal style={{ elevation: 10 }}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.BoxButtons>
          <S.ButtonConfirm onPress={onPressConfirm}>
            <S.TextButtonConfirm>{titleButtonConfirm}</S.TextButtonConfirm>
          </S.ButtonConfirm>

          <S.ButtonCancel onPress={onPressCancel}>
            <S.TextButtonCancel>{titleButtonCancel}</S.TextButtonCancel>
          </S.ButtonCancel>
        </S.BoxButtons>
      </S.BoxContentModal>
    </S.BoxModal>
  );
}
