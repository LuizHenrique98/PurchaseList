import React, { useState, useEffect } from "react";
import { BackHandler, Alert } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";

import { showMessage } from "react-native-flash-message";

import * as S from "./styles";
import colors from "../../global/colors";

import {
  getPurchaseItem,
  handleAddPurchaseItem,
  handleRemoveItem,
  handleCheckItem,
  handleFindItem,
  handleUpdateDescription,
} from "../../utils/storage";

import WindowModalInput from "../../components/WindowModalInput";
import WindowModalConfirm from "../../components/WindowModalConfirm";
import RenderItemPurchase, {
  RenderItemPurchaseProps,
} from "../../components/RenderItemPurchase";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [purchaseItem, setPurchaseItem] = useState("");
  const [totalPurchaseItem, setTotalPurchaseItem] = useState(0);
  const [dataPuchaseItem, setDataPurchaseItem] = useState<
    RenderItemPurchaseProps[]
  >([]);
  const [totalPurchaseItemChecked, setTotalPurchaseItemChecked] = useState(0);
  const [idRemovePurchaseItem, setIdRemovePurchaseItem] = useState("");
  const [itemFiltered, setItemFiltered] = useState("");
  const [idUpdatePurchaseItem, setIdUpdatePurchaseItem] = useState("");
  const [modalInputVisible, setModalInputVisible] = useState(false);
  const [newDescriptionPurchaseItem, setNewDescriptionPurchaseItem] =
    useState("");

  useEffect(() => {
    async function handleFetchData() {
      const response = await getPurchaseItem();
      setDataPurchaseItem(response);
      handleTotalizers(response);
    }

    handleFetchData();
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Confirme", "Deseja fechar o App?", [
        {
          text: "Não",
          onPress: () => null,
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  async function handleTotalizers(dataPuchaseItem: any) {
    const totalItemCheked = dataPuchaseItem.filter(
      (item: any) => item.checked === true
    ).length;
    setTotalPurchaseItemChecked(totalItemCheked);
    setTotalPurchaseItem(dataPuchaseItem.length);
  }

  async function handleSetIdRemove(id: string) {
    const itemFiltered = await handleFindItem(id);
    const { description } = itemFiltered;
    setItemFiltered(description);
    setIdRemovePurchaseItem(id);
    setModalVisible(true);
  }

  async function handleSetIdUpdate(id: string) {
    setIdUpdatePurchaseItem(id);
    setModalInputVisible(true);
  }

  async function handleStorage(
    action: string,
    id?: string,
    description?: string
  ) {
    if (action === "insert" && description !== "") {
      const newData = await handleAddPurchaseItem(description);
      setDataPurchaseItem(newData);
      handleTotalizers(newData);
      setPurchaseItem("");
    } else if (action === "delete" && id !== "") {
      const newData = await handleRemoveItem(id);
      setDataPurchaseItem(newData);
      handleTotalizers(newData);
      setModalVisible(false);
    } else if (action === "check" && id !== "") {
      const newData = await handleCheckItem(id);
      setDataPurchaseItem(newData);
      handleTotalizers(newData);
    } else if (action === "update" && id !== "" && description !== "") {
      const newData = await handleUpdateDescription(id, description);
      setDataPurchaseItem(newData);
      setIdUpdatePurchaseItem("");
      setNewDescriptionPurchaseItem("");
      setModalInputVisible(false);
    } else {
      showMessage({
        message: "Ops...",
        description: "Existem inconsistências",
        type: "danger",
      });
    }
  }

  function handleEmptyList() {
    return (
      <S.BoxEmptyList>
        <S.TextListEmpty>Nenhum item na lista</S.TextListEmpty>
      </S.BoxEmptyList>
    );
  }

  return (
    <S.BoxContainer>
      <S.BoxHeader>
        <S.Title>Lista de compras</S.Title>
        {totalPurchaseItem > 0 ? (
          <S.BoxTotalizers>
            <S.Title>
              {totalPurchaseItemChecked}/{totalPurchaseItem}
            </S.Title>
          </S.BoxTotalizers>
        ) : null}
      </S.BoxHeader>

      <S.PurchaseList
        data={dataPuchaseItem}
        ListEmptyComponent={handleEmptyList}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <RenderItemPurchase
            data={item}
            onPressCheckItem={() => handleStorage("check", item.id, "")}
            onPressRemoveItem={() => handleSetIdRemove(item.id)}
            onLongPressCheckItem={() => handleSetIdUpdate(item.id)}
          />
        )}
      />

      <S.BoxInputItem>
        <S.InputItem
          placeholder="Novo item da lista"
          value={purchaseItem}
          onChangeText={(text) => setPurchaseItem(text)}
          placeholderTextColor={colors.gray}
        />

        <S.ButtonAddItem
          onPress={() => handleStorage("insert", "", purchaseItem)}
        >
          <Entypo name="plus" size={20} color={colors.blue} />
        </S.ButtonAddItem>
      </S.BoxInputItem>
      <WindowModalConfirm
        title="Confirme"
        description={`O item ${itemFiltered} será excluído`}
        titleButtonConfirm="Ok"
        titleButtonCancel="Cancelar"
        visible={modalVisible}
        onPressConfirm={() => handleStorage("delete", idRemovePurchaseItem, "")}
        onPressCancel={() => setModalVisible(false)}
      />
      <WindowModalInput
        visible={modalInputVisible}
        title="Confirme"
        titleButtonConfirm="Ok"
        titleButtonCancel="Cancelar"
        onPressConfirm={() =>
          handleStorage(
            "update",
            idUpdatePurchaseItem,
            newDescriptionPurchaseItem
          )
        }
        onPressCancel={() => setModalInputVisible(false)}
        onChangeTextInput={(text) => setNewDescriptionPurchaseItem(text)}
      />
    </S.BoxContainer>
  );
}
