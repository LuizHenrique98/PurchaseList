import React from "react";

import colors from "../../global/colors";
import * as S from "./styles";

interface WindowModalInputProps {
  visible: boolean;
  title: string;
  titleButtonConfirm: string;
  titleButtonCancel: string;
  onPressConfirm: () => void;
  onPressCancel: () => void;
  onChangeTextInput: (item) => void;
}

export default function WindowModalInput({
  visible,
  title,
  titleButtonConfirm,
  titleButtonCancel,
  onPressConfirm,
  onPressCancel,
  onChangeTextInput,
}: WindowModalInputProps) {
  return (
    <S.Container>
      <S.BoxModal visible={visible} animationType="slide" transparent>
        <S.BoxContainerModal>
          <S.BoxContentModal style={{ elevation: 10 }}>
            <S.Title>{title}</S.Title>
            <S.Input
              placeholder="Informe a nova descrição"
              onChangeText={onChangeTextInput}
              placeholderTextColor={colors.gray}              
            />

            <S.BoxButtons>
              <S.ButtonConfirm onPress={onPressConfirm}>
                <S.TextButtonConfirm>{titleButtonConfirm}</S.TextButtonConfirm>
              </S.ButtonConfirm>

              <S.ButtonCancel onPress={onPressCancel}>
                <S.TextButtonCancel>{titleButtonCancel}</S.TextButtonCancel>
              </S.ButtonCancel>
            </S.BoxButtons>
          </S.BoxContentModal>
        </S.BoxContainerModal>
      </S.BoxModal>
    </S.Container>
  );
}
