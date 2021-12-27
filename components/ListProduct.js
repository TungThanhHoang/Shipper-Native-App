import React from "react";
import { View, Text, Image ,Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import Ionicons from "react-native-vector-icons/Ionicons";
import { API_URL } from "../constants/constant";

function ListProduct({ oneBill, formatPrice }) {
  const ItemBill = ({
    item: {
      quanlity,
      products: {
        title,
        Price,
        picture: {
          0: { url },
        },
      },
    },
  }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: `${API_URL}${url}` }}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
        />
        <View>
          <Text>{title}</Text>
          <Text style={{ fontWeight: "500", marginTop: 8 }}>x{quanlity}</Text>
        </View>
      </View>
      <Text style={{ color: "#666" }}>{formatPrice.format(Price)}</Text>
    </View>
  );

  return (
    <>
      <View
        style={{
          marginTop: 10,
          borderWidth: 0.5,
          borderRadius: 10,
          padding: 10,
          width: windowWidth - 20,
          alignSelf: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location" size={22} color="#2274A5" />
          <Text style={{ marginLeft: 10 }}>Địa chỉ giao hàng</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 3 }}>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            {oneBill.name}
          </Text>
          <Text style={{ marginLeft: 5, fontWeight: "600", fontSize: 15 }}>
            {oneBill.phone}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 3,
            justifyContent: "space-around",
          }}
        >
          <Text>{oneBill.address}, TP Đà Nẵng</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        {oneBill.cart?.map((item, index) => {
          return <ItemBill key={index} item={item} />;
        })}
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            borderBottomWidth: 0.5,
            paddingBottom: 10,
            borderColor: "#E4E5EE",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 }}>
            Phương thức thanh toán
          </Text>
          <Text style={{ marginTop: 5 }}>{oneBill.payment}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
              paddingTop: 10,
            }}
          >
            <Text>Phí vận chuyển</Text>
            <Text>{formatPrice.format(15000)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Tổng tiền</Text>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#D51243" }}>
              {formatPrice.format(oneBill.price)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default ListProduct;
