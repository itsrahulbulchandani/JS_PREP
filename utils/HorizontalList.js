import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default HorizontalList = () => {
  const [selectedItem, setSelectedItem] = useState("item1");

  console.log(selectedItem)
  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const listItem = (itemText) => {
    console.log(selectedItem,"xxxx")
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => handlePress(itemText)}
          style={[
            styles.item,
            selectedItem === itemText && styles.selectedItem,
          ]}
        >
          <Text style={styles.text && selectedItem === itemText && styles.selectedText}>{itemText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {listItem("item1")}
      {listItem("item2")}
      {listItem("item3")}
      {listItem("item4")}
      {listItem("item5")}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 10,
  },
  item: {
    // Width of each item
    height: 30, // Height of each item
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center", // Margin between items
    marginRight: 20,
  },
  selectedItem: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    fontWeight: "normal"
  },  
  selectedText: {
    fontSize: 18,
    fontWeight: "bond"
  },
});
