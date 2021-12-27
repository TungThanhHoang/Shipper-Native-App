import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContextProvider from "./context/AuthContext";
import Landing from "./screens/Landing";
import ProtectRouter from "./routing/ProtectRouter";
import OrderContextProvider from "./context/OrderContext";
import { Provider } from "@ant-design/react-native";

const Root = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <OrderContextProvider>
        <NavigationContainer>
          <Provider>
            <Root.Navigator
              initialRouteName="Landing"
              screenOptions={{
                gestureEnabled: false,
                headerShown: false,
              }}
            >
              <Root.Screen name="Landing" component={Landing} />
              <Root.Screen name="Protect" component={ProtectRouter} />
            </Root.Navigator>
          </Provider>
        </NavigationContainer>
      </OrderContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
