import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
function ExistOrder({ item: { bills }, formatPrice }) {
  const navigation = useNavigation();

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const dateOrder = date.toLocaleString("en-Us");
    return dateOrder;
  };

  const CardBill = ({
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
  }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => {
        navigation.navigate("Detail-bill", { idBill: id, code: id_code });
      }}
    >
      <View style={styles.infoCard}>
        <Text style={{ color: "#666", fontWeight: "500" }}>#{id_code}</Text>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "500",
            color: "#D51243",
            fontSize: 13,
          }}
        >
          {status === "confirmed"
            ? "Đã xác nhận"
            : status === "unconfirmed"
            ? "Chưa xác nhận"
            : status === "deliveried"
            ? "Đã giao hàng"
            : status === "delivery"
            ? "Đang giao hàng"
            : "Đã hủy"}
        </Text>
      </View>
      <Text style={{ color: "#666" }}>{formatDate(createdAt)}</Text>
      <Text style={{ paddingVertical: 5 }}>
        Tổng tiền:{" "}
        <Text style={{ fontWeight: "500", fontSize: 16, color: "#D51243" }}>
          {" "}
          {formatPrice.format(price)}
        </Text>{" "}
      </Text>
      <Text>
        Địa chỉ giao hàng:{" "}
        <Text style={{ color: "#444" }}>{address}, TP Đà Nẵng</Text>
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={styles.container}>
        {bills.map((item, index) => {
          if (item.status === "confirmed") {
            return <CardBill key={index} item={item} />;
          }
        })}
      </View>
    </>
  );
}

export default ExistOrder;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardItem: {
    borderColor: "#FFD449",
    borderWidth: 1,
    width: windowWidth - 30,
    backgroundColor: "#E7DFC6",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  infoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
});
