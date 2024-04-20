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
    <View className="pl-4 pr-4 flex flex-row justify-evenly">
      <View className="mb-2 flex-1 h-32 mr-1 bg-pink-500 rounded-3xl">
        <TouchableOpacity className="flex-1 h-32"
          onPress={() => navigateTo("Component1")}
        ></TouchableOpacity>
      </View>
        <View className="mb-2 flex-1 h-32 mr-1 bg-pink-500 rounded-3xl" >
        <TouchableOpacity className="h-32 w-44" onPress={() => navigateTo("Component2Stack")}/>
        </View>

    </View>
  );
};
