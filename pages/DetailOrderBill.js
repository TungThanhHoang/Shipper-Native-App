import React, { useEffect, useContext } from "react";
import { View, Text, Dimensions, Image, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { OrderContext } from "../context/OrderContext";
import { API_URL } from "../constants/constant";
import LoadingPage from "../components/LoadingPage";
import { Toast } from "@ant-design/react-native";
import Navbar from "../components/Navbar";
import ListProduct from "../components/ListProduct";
const windowWidth = Dimensions.get("window").width;

function DetailOrderBill({ route, navigation }) {
  //   const navigation = useNavigation();
  const { idBill, code } = route.params;
  const {
    updateBillStateDelivery,
    isloadingBill,
    formatPrice,
    loadBillDetail,
    billState: { oneBill },
  } = useContext(OrderContext);
  useEffect(() => {
    loadBillDetail(idBill);
  }, [idBill]);
  const handleUpdateStatus = async (idRecord) => {
    try {
      await updateBillStateDelivery(idRecord)
        .then((res) => {
          Toast.info("Nhận đơn thành công !");
          navigation.navigate("Home");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <View style={{ flex: 1 }}>
        {isloadingBill ? <LoadingPage /> : null}

        <Navbar code={code} />
        {/* info user */}
        <ScrollView>
          <ListProduct oneBill={oneBill} formatPrice={formatPrice} />
        </ScrollView>
        <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => handleUpdateStatus(oneBill.id)}
            style={{
              backgroundColor: "#D51243",
              padding: 15,
              width: windowWidth / 3,
              alignSelf: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "500" }}>Nhận đơn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default DetailOrderBill;
