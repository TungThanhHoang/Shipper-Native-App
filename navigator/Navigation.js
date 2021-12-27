import React, { useEffect, useState, useContext } from "react";
import * as Font from "expo-font";
import { Provider } from "@ant-design/react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import OrderScreen from "../screens/OrderScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const Tab = createBottomTabNavigator();
function Navigation() {
  useEffect(() => {
    Font.loadAsync(
      "antoutline",
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );
  }, []);

  return (
    <>
      <Provider>
        <Tab.Navigator
          screenOptions={{ headerShow: false }}
          tabBarOptions={{
            labelStyle:{
              fontSize:12
            },
            style: {
              backgroundColor: "#fff",
              borderTopColor: "transparent",
              padding: 5,
              height: 55,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            },
            activeTintColor: "#EEBA0B",
            inactiveTintColor: "#272838",
          
          }}
        >
          <Tab.Screen
            name="Trang Chủ"
            component={HomeScreen}
            options={{
              tabBarLabel: "Trang chủ",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Đơn giao"
            component={DeliveryScreen}
            options={{
              tabBarLabel: "Đơn giao",
              tabBarIcon: ({ color }) => (
                <Ionicons name="archive" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Tài khoản"
            component={AccountScreen}
            options={{
              tabBarLabel: "Tài khoản",
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </Provider>
    </>
  );
}

export default Navigation;
