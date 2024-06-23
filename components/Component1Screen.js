import { Text, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import AppContext from "../context";
import { styles } from "../global-styles";

export default function Component1Screen() {
  const context = useContext(AppContext);
  
  useEffect(()=>{
    context.setIsLoading(false);
  },[])

  return (
    <>
      {!context.isLoading ? (
        <View style={styles.container}>
          <Text>Component 1</Text>
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
