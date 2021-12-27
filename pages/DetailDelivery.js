import React, { useContext, useEffect } from "react";
import { View, Text ,Dimensions} from "react-native";
import Navbar from "../components/Navbar";
import ListProduct from "../components/ListProduct";
import LoadingPage from "../components/LoadingPage";
import { OrderContext } from "../context/OrderContext";
import { TouchableOpacity } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
function DetailDelivery({ route }) {
    const navigation = useNavigation();
  const { code, idBill } = route.params;
  const {
    updateBillStateDeliveried,
    isloadingBill,
    isloadingSucccess,
    formatPrice,
    loadBillDetail,
    billState: { oneBill },
  } = useContext(OrderContext);
  useEffect(() => {
    loadBillDetail(idBill);
  }, [idBill]);
 console.log(oneBill.payment);
  const handleUpdateStatus = async (idRecord) => {
    try {
      await updateBillStateDeliveried(idRecord)
        .then((res) => {
          navigation.navigate("Deliveried-success");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={{ flex:1}}>
        {isloadingBill ? <LoadingPage /> : null}
        {isloadingSucccess ? <LoadingPage /> : null}
        <Navbar code={code} />
        <ListProduct oneBill={oneBill} formatPrice={formatPrice} />
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
            <Text style={{ fontWeight: "500" }}>Đã giao hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default DetailDelivery;
