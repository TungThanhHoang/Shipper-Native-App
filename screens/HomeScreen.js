import React, { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../pages/Home";
import DetailOrderBill from "../pages/DetailOrderBill";
const HomeStack = createStackNavigator();
export default function HomeScreen({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Detail-bill") {
      navigation.setOptions({ tabBarVisible: false });
    } else if (routeName === "Cart") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Detail-bill" component={DetailOrderBill} />
      </HomeStack.Navigator>
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
