import React from "react";
import { View, Text, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";

function DeliverySuccess() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: "center" }}>
          <LottieView
            style={{ width: windowWidth, height: windowHeight / 2 }}
            source={require("../assets/receive-order.json")}
            loop={true}
            autoPlay
          />
        </View>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          Đã giao đơn hàng thành công !
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 50,
            backgroundColor: "#F9A620",
            width: windowWidth / 2,
            padding: 12,
            borderRadius: 10,
            alignSelf: "center",
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
          <TouchableOpacity onPress={()=> navigation.navigate('Delivery') }>
            <Text style={{ textAlign: "center" , fontWeight:"500" }}>Quay về</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default DeliverySuccess;
