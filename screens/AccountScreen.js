import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import InfoUser from "../pages/InfoUser";
const AccountStack = createStackNavigator();
function AccountScreen({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Order-bill" ||
      routeName === "Detail-bill" ||
      routeName === "Detail-user" ||
      routeName === "Address-user" ||
      routeName === "Password-user"
    ) {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <>
      <AccountStack.Navigator screenOptions={{ headerShown: false }}>
        <AccountStack.Screen name="Info-user" component={InfoUser} />
      </AccountStack.Navigator>
    </>
  );
}

export default AccountScreen;
