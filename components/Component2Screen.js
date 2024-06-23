import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import QuestionComponent from "../utils/QuestionComponent";
import "expo-dev-client";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import questionsData from "../data/questions";
import { useContext } from "react";
import AppContext from "../context";
import { styles } from "../global-styles";

const Component2Screen = () => {
  console.log("SDfsfsfs");

  const navigation = useNavigation();

  const handleQuestionPress = (index, question) => {
    navigation.navigate("Answer", { index, question }); // Navigate to Answer screen
  };

  const context = useContext(AppContext);
  console.log("context is loading", context.isLoading);

  return (
    <>
      {!context.isLoading ? (
        <View style={styles.container}>
          <View style={styles.questionContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {questionsData.map((question, index) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => handleQuestionPress(index, question)}
                  >
                    <QuestionComponent question={question} index={index} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <StatusBar style="auto" />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};


export default Component2Screen;
