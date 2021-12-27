import React, { useCallback, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  RefreshControl,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrderContext";
import ExistOrder from "../components/ExistOrder";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Home() {
  const {
    authState: {
      user: { firstname, lastname, phone, ward, district },
    },
  } = useContext(AuthContext);
  const {
    billState: { orderBill },
    loadBillOrder,
    formatPrice,
  } = useContext(OrderContext);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadBillOrder().then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    loadBillOrder();
  }, []);
  // console.log(orderBill);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <View style={styles.gridViewTop}>
            <Image
              source={{
                uri: "https://assets.glxplay.io/static/avatars/Avatar%20Profile-12.png",
              }}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
            <View style={styles.titleUser}>
              <Text style={styles.nameUser}>
                {lastname} {firstname}
              </Text>
              <Text style={styles.wardUser}>
                {ward}, {district}
              </Text>
            </View>
          </View>
          <View>
            <Ionicons name="search" size={24} color="#333" />
          </View>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
            <Text style={styles.titlePage}>Đơn hàng hiện có</Text>
            <View>
              {orderBill.map((item, index) => (
                <ExistOrder key={index} item={item} formatPrice={formatPrice} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  viewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1c40f",
    height: 100,
    width: windowWidth,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  gridViewTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleUser: {
    marginLeft: 10,
  },
  nameUser: { fontWeight: "500", fontSize: 16 },
  wardUser: { fontSize: 13, paddingTop: 2, color: "#333" },
  viewPage: {},
  titlePage: { padding: 10, fontSize: 15, fontWeight: "500" },
});
