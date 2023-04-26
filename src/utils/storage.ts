import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import uuid from "react-native-uuid";

const { getItem, setItem } = useAsyncStorage("@appListaDeCompras:item");

export async function getPurchaseItem() {
  try {
    const response = await getItem();
    return JSON.parse(response) || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}

export async function handleAddPurchaseItem(description: string) {
  if (description === "") {
    showMessage({
      message: "Ops...",
      description: "Descrição do item obrigatória",
      type: "warning",
    });
    return;
  }

  try {
    const id = String(uuid.v4());

    const newPurchaseItem = {
      id,
      description,
      checked: false,
    };

    const response = await getItem();

    const oldData = response ? JSON.parse(response) : [];

    const newData = [...oldData, newPurchaseItem];

    await setItem(JSON.stringify(newData));

    showMessage({
      message: "Sucesso",
      description: "Item adicionado",
      type: "success",
    });

    return newData || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}

export async function handleCheckItem(id: string) {
  try {
    const response = await getItem();

    const responseData = response ? JSON.parse(response) : [];

    responseData.forEach((item: any) => {
      if (item.id === id) {
        item.checked = item.checked ? false : true;
      }
    });
    await setItem(JSON.stringify(responseData));

    return responseData || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}

export async function handleRemoveItem(id: string) {
  try {
    const response = await getItem();

    const oldData = response ? JSON.parse(response) : [];

    const newData = oldData.filter((item: any) => item.id !== id);

    await setItem(JSON.stringify(newData));

    return newData || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}

export async function handleFindItem(id: string) {
  try {
    const response = await getItem();

    const oldData = response ? JSON.parse(response) : [];

    const newData = oldData.find((item: any) => item.id === id);

    return newData || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}

export async function handleUpdateDescription(
  id: string,
  newDescription: string
) {
  try {
    const response = await getItem();

    const responseData = response ? JSON.parse(response) : [];

    responseData.forEach((item: any) => {
      if (item.id === id) {
        item.description = newDescription;
      }
    });
    await setItem(JSON.stringify(responseData));

    return responseData || [];
  } catch (error) {
    showMessage({
      message: "Ops...",
      description: "Algo deu errado",
      type: "danger",
    });
    console.log(error);
  }
}
