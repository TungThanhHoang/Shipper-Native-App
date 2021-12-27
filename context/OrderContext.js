import React, { useState, createContext, useReducer } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { OrderReducer } from "../reducer/OrderReducer";
import { API_URL, TOKEN_USER } from "../constants/constant";
import { LOAD_ONE_ORDER, LOAD_ORDER } from "../reducer/store";
import { ActionSheet } from "@ant-design/react-native";
export const OrderContext = createContext();
const OrderContextProvider = ({ children }) => {
  const [billState, dispatch] = useReducer(OrderReducer, {
    orderBill: [],
    oneBill: [],
    isloading: true,
  });

  const [isloadingBill, setLoading] = useState(false);
  const [isloadingSuccess, setLoadingSuccess] = useState(false);

  const loadBillOrder = async () => {
    const tokenUser = await SecureStore.getItemAsync(TOKEN_USER);
    try {
      const response = await axios.get(`${API_URL}/shippers`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      if (response.data) {
        dispatch({ type: LOAD_ORDER, payload: response.data, isloading: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadBillDetail = async (idBill) => {
    const tokenUser = await SecureStore.getItemAsync(TOKEN_USER);
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/bills/${idBill}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      if (response.data) {
        setLoading(false);
        dispatch({ type: LOAD_ONE_ORDER, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateBillStateDelivery = async (idBillOrder) => {
    const tokenUser = await SecureStore.getItemAsync(TOKEN_USER);
    try {
      const response = await axios.put(
        `${API_URL}/bills/${idBillOrder}`,
        { status: "delivery" },
        {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      if (response.data) {
        loadBillOrder();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateBillStateDeliveried = async (idBillOrder) => {
    const tokenUser = await SecureStore.getItemAsync(TOKEN_USER);
    setLoadingSuccess(true)
    try {
      const response = await axios.put(
        `${API_URL}/bills/${idBillOrder}`,
        { status: "deliveried" },
        {
          headers: {
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      if (response.data) {
        setLoadingSuccess(false)
        loadBillOrder();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formatPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const dataContext = {
    billState,
    loadBillOrder,
    loadBillDetail,
    updateBillStateDelivery,
    updateBillStateDeliveried,
    isloadingBill,
    formatPrice,
    isloadingSuccess
  };
  return (
    <OrderContext.Provider value={dataContext}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderContextProvider;
