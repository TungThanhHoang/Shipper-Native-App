import React, { useContext } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemUserInfo from "../components/ItemUserInfo";
import { AuthContext } from "../context/AuthContext";
const windowWidth = Dimensions.get("window").width;
function InfoUser() {
  const {
    logoutUser,
    authState: {
      user: { firstname, lastname, ward, district, phone },
    },
  } = useContext(AuthContext);
  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: windowWidth,
            height: 100,
            backgroundColor: "#f1c40f",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingTop: 10,
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://assets.glxplay.io/static/avatars/Avatar%20Profile-12.png",
              }}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10,marginRight:10 }}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>
                {lastname} {firstname}
              </Text>
              <Text style={{ color: "#666", marginTop: 2 , fontSize:13 }}>
                {ward}, {district}, TP Đà Nẵng
              </Text>
            </View>
          </View>
          <Ionicons name="settings" size={26} color="#333" />
        </View>
        <ItemUserInfo />
        <View
          style={{
            position: "absolute",
            bottom: 40,
            backgroundColor: "#FFBC42",
            width: windowWidth - 40,
            alignItems: "center",
            alignSelf: "center",
            height: 45,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => logoutUser()}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Đăng Xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default InfoUser;
