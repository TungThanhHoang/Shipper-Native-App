import React ,{ useContext } from "react";
import { View, Text } from "react-native";
function ItemUserInfo() {
  return (
    <>
      <View
        style={{
          margin: 10,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#E4E5EE" ,paddingVertical:5 }}>
          <Text
            style={{
              marginVertical: 8,
              fontSize: 15,
            }}
          >
            Thông tin tài khoản
          </Text>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#E4E5EE" ,paddingVertical:5 }}>
          <Text
            style={{
              marginVertical: 8,
              fontSize: 15,
            }}
          >
            Đơn hàng đã giao
          </Text>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#E4E5EE" ,paddingVertical:5 }}>
          <Text
            style={{
              marginVertical: 8,
              fontSize: 15,
            }}
          >
           Điểm thưởng
          </Text>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#E4E5EE" ,paddingVertical:5 }}>
          <Text
            style={{
              marginVertical: 8,
              fontSize: 15,
            }}
          >
          Liên hệ hổ trợ
          </Text>
        </View>
      </View>
    </>
  );
}

export default ItemUserInfo;
