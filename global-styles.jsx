import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    opacity:1,
  },
  scrollContainer: {
    paddingTop: 20, // Adjust spacing if needed
    paddingBottom: 20, // Adjust spacing if needed
    width: "100%",
    backgroundColor: "#ffffff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color can be adjusted
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color:"blue",
    backgroundColor:"white",
    width: "100%", // Set the width to the screen width
    paddingHorizontal: 20, // Add some horizontal padding for spacing
  },
});
