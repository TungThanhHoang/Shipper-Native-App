import React, { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Delivery from "../pages/Delivery";
import DetailDelivery from "../pages/DetailDelivery";
import DeliverySuccess from "../pages/DeliverySuccess";
const DeliveryStack = createStackNavigator();
export default function DeliveryScreen({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Detail-delivery" || routeName === "Deliveried-success") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <>
      <DeliveryStack.Navigator
        initialRouteName="Delivery"
        screenOptions={{ headerShown: false }}
      >
        <DeliveryStack.Screen name="Delivery" component={Delivery} />
        <DeliveryStack.Screen name="Detail-delivery" component={DetailDelivery} />
        <DeliveryStack.Screen name="Deliveried-success" component={DeliverySuccess} />
      </DeliveryStack.Navigator>
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
