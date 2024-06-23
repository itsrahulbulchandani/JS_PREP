import { ActivityIndicator, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../global-styles";
import { useContext } from "react";
import AppContext from "../context";

export default function Component4Screen() {
    const context = useContext(AppContext);
  
    return (
      <>
        {!context.isLoading ? (
          <View style={styles.container}>
            <Text>Component 4</Text>
            <StatusBar style="auto" />
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </>
    );
  }
  