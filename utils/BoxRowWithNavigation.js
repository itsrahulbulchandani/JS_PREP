import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const BoxRowWithNavigation = ({ tileNavigations }) => {
  const navigation = useNavigation();

  const navigateTo = (location) => {
    console.log("inside navigation");
    navigation.navigate(location);
  };

  return (
    <>
      <View style={styles.row}>
        <TouchableOpacity
          style={{...styles.box,backgroundColor:"teal"}}
          onPress={() => navigateTo("Component1")}
        >
          <Text style={styles.text}>JS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.box,backgroundColor:"pink"}}
          onPress={() => navigateTo("Component2Stack")}
        >
          <Text style={styles.text}>RN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={{...styles.box,backgroundColor:"purple"}}
          onPress={() => navigateTo("Component3")}
        >
          <Text style={styles.text}>JS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.box,backgroundColor:"orange"}}
          onPress={() => navigateTo("Component4")}
        >
          <Text style={styles.text}>RN</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  box: {
    flex: 1,
    height: 96,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    display:"flex",
    padding:15,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    display:"flex",
    justifyContent:"flex-end"
  },
});
