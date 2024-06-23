import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const QuestionComponent = ({ question, index }) => {
  return (
    <>
      <View className="left-2 right-2 p-2 mb-2 flex flex-row max-h-20 h-20 items-center">
        <Text className="flex flex-wrap font-light text-xl items-left justify-center">
          {index}.{" "}
        </Text>
        <Text className="flex flex-wrap font-extralight text-xl items-left justify-center">
          {question}
        </Text>
      </View>
      <View className="flex-grow border-b border-gray-200"></View>
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

export default QuestionComponent;
