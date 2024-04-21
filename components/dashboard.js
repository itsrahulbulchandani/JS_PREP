import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BoxRowWithNavigation } from "../utils/BoxRowWithNavigation";
import { BigBoxWithNavigation } from "../utils/BigBoxWithNavigation";
import HorizontalList from "../utils/HorizontalList";

const windowHeight = Dimensions.get("window").height;
const square_box_md = "mb-2 h-40 bg-pink-500 rounded-3xl";


const Dashboard = ({ question, index }) => {

  return (
    <>
      <View className="flex flex-row pt-8 pb-8 pl-8">
        <Text className="text-3xl">Hello, </Text>
        <Text className="text-3xl font-semibold">Rahul!</Text>
      </View>
      <BoxRowWithNavigation />
      <HorizontalList/>
      <BigBoxWithNavigation />
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

{/* <Stack.Navigator
          // screenOptions={({ route }) => ({
          //   tabBarActiveBackgroundColor: "blue",
          //   headerTitle: "",
          //   headerStyle: { height: "10%" },
          // })}
          // screenListeners={{
          //   tabPress: handleTabPress,
          // }}
        >
          <Stack.Screen name="Component1" component={Dashboard}/>
          <Stack.Screen name="Component2Stack" component={Component2Stack} />
          <Stack.Screen name="Component3" component={Component3Screen} />
          <Stack.Screen name="Component4" component={Component4Screen} />
        </Stack.Navigator> */}

