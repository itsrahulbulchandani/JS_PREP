import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import answerData from "../data/answers";

const windowHeight = Dimensions.get("window").height;

const AnswerComponent = ({ route }) => {
  console.log("inside here",route)
  return (
    <View
      style={[styles.container, { width: "100%", height: "100%" }]}
    >
      <Text style={styles.questionText}>{route.params.question}</Text>
      <Text style={styles.answerText}>{answerData[route.params.index]}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  answerText: {
    fontSize: 18,
  },
  questionText: {
    fontSize: 28,
  },
});

export default AnswerComponent;
