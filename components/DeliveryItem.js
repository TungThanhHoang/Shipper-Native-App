import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
function DeliveryItem({
  item: {
    id,
    address,
    id_code,
    imgcode,
    name,
    payment,
    phone,
    price,
    status,
    createdAt,
  },
  index,
  formatPrice
}) {
  const navigation = useNavigation();
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const dateOrder = date.toLocaleString("en-Us");
    return dateOrder;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail-delivery", { code: id_code, idBill: id })
        }
        style={{ padding: 10 }}
      >
        <Text style={{ marginVertical: 10 }}>Kiện hàng #{}</Text>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            backgroundColor: "#E7DFC6",
            borderColor: "#FFD449",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color:'#666'}}>#{id_code}</Text>
            <Text style={{ color:'#666'}}>{formatDate(createdAt)}</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text>
              Tên người nhận:
              <Text style={{ fontWeight: "500", fontSize: 16 }}>{name}</Text>
            </Text>
            <Text style={{ marginVertical: 5 }}>
              Số tiền thu hộ:

              <Text style={{ fontSize: 16, fontWeight: "500" , color:"#D51243" }}>{formatPrice.format(price)}</Text>
            </Text>
            <Text>Số điện thoại: <Text style={{ fontWeight:"500" , fontSize:16}}>{phone}</Text></Text>
            <Text style={{ marginVertical: 5 }}>
              Địa chỉ: <Text style={{ color:'#444'}}>{address}, TP Đà Nẵng</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default DeliveryItem;
