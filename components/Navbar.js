import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

function Navbar({code}) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: "#E7DFC6",
          height: 70,
          flexDirection: "row",
          paddingTop: 10,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={28} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Đơn hàng <Text style={{ color: "#D51243" }}>#{code}</Text>
        </Text>
        <Ionicons name="alert" size={28} />
      </View>
    </>
  );
}

export default Navbar;
