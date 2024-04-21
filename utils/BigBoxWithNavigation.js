import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BigBoxWithNavigation = ({ tileNavigations }) => {
  const navigation = useNavigation();

  const navigateTo = (location) => {
    console.log("inside navigation");
    navigation.navigate(location);
  };

  return (
    <>
      <View className="mb-2 ml-6 mr-6 h-64 bg-red-500 rounded-3xl">
        <TouchableOpacity
          className="h-60 w-44"
          onPress={() => navigateTo("Component2Stack")}
        />
      </View>
    </>
  );
};
