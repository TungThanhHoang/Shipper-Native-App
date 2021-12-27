import React, { useState, useCallback, useContext } from "react";
import { View, Text, Dimensions, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DeliveryItem from "../components/DeliveryItem";
import { OrderContext } from "../context/OrderContext";
const windowWidth = Dimensions.get("window").width;
function Delivery() {
  const {
    billState: { orderBill },
    loadBillOrder,
    formatPrice,
  } = useContext(OrderContext);
  const [isRefreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadBillOrder().then(() => setRefreshing(false));
  }, []);

  const CardItem = ({ item: { bills } }) => (
    <View>
      {bills.map((item, index) => {
        if (item.status === "delivery") {
          return (
            <DeliveryItem key={index} item={item} index={index} formatPrice={formatPrice}/>
          );
        }
      })}
    </View>
  );

  return (
    <>
      <View
        style={{
          height: 80,
          width: windowWidth,
          backgroundColor: "#f1c40f",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Đơn hàng đang giao
        </Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        {orderBill.map((item, index) => (
          <CardItem key={index} item={item} formatPrice={formatPrice} />
        ))}
      </ScrollView>
    </>
  );
}

export default Delivery;
