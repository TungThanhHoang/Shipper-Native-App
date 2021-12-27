import React, { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Order from "../pages/Order";
const OrderStack = createStackNavigator();
export default function OrderScreen({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Detail-product" || routeName === "Detail-category") {
      navigation.setOptions({ tabBarVisible: false });
    } else if (routeName === "Cart") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <>
      <OrderStack.Navigator
        initialRouteName="Order"
        screenOptions={{ headerShown: false }}
      >
        <OrderStack.Screen name="Order" component={Order} />
      </OrderStack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
});
