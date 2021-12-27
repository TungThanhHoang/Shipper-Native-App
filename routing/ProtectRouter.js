import React, { useContext, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Navigation from "../navigator/Navigation";
import AuthUser from "../AuthUser/AuthUser";
import { AuthContext } from "../context/AuthContext";
import LoadingPage from "../components/LoadingPage";
function ProtectRouter() {
  const {
    authState: { isAuth, isLoading },
  } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingPage />;
  }
  return <>{isAuth ? <Navigation /> : <AuthUser />}</>;
}

export default ProtectRouter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
