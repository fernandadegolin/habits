import "./src/lib/dayjs";

import { StyleSheet, Text, View, StatusBar } from "react-native";

import { Routes } from "./src/routes";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fernanda Degolin</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter_800ExtraBold",
  },
});
