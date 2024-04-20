import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BoxRowWithNavigation } from "../utils/BoxRowWithNavigation";

const windowHeight = Dimensions.get("window").height;
const square_box_md = "mb-2 h-40 bg-pink-500 rounded-3xl";
const Dashboard = ({ question, index }) => {
    // const navigateTo = (location) => {
    //     navigation.navigate(location);
    //   };
  return (
    <>
    <Text className="pl-6 text-2xl w- font-semibold pb-4 pr-6">Sample Text</Text>
<BoxRowWithNavigation/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
  },
});

export default Dashboard;
