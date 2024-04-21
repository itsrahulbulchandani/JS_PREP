import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BoxRowWithNavigation = ({ tileNavigations }) => {
  const navigation = useNavigation();

  const navigateTo = (location) => {
    console.log("inside navigation");
    navigation.navigate(location);
  };

  return (
    <>
      <View className="pl-6 pr-6 flex flex-row justify-evenly pb-2">
        <View className="mb-2 flex-1 h-24 mr-2 bg-red-500 rounded-3xl">
          <TouchableOpacity
            className="flex-1 h-32"
            onPress={() => navigateTo("Component1")}
          ></TouchableOpacity>
        </View>
        <View className="mb-2 flex-1 h-24 ml-2 bg-red-500 rounded-3xl">
          <TouchableOpacity
            className="h-32 w-44"
            onPress={() => navigateTo("Component2Stack")}
          />
        </View>
      </View>
      <View className="pl-6 pr-6 flex flex-row justify-evenly pb-4">
        <View className="mb-2 flex-1 h-24 mr-2 bg-red-500 rounded-3xl">
          <TouchableOpacity
            className="flex-1 h-32"
            onPress={() => navigateTo("Component1")}
          ></TouchableOpacity>
        </View>
        <View className="mb-2 flex-1 h-24 ml-2 bg-red-500 rounded-3xl">
          <TouchableOpacity
            className="h-32 w-44"
            onPress={() => navigateTo("Component2Stack")}
          />
        </View>
      </View>
    </>
  );
};
