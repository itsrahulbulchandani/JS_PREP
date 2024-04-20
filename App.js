import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Component2Screen from "./components/Component2Screen.js";

import "expo-dev-client";
// import {
//   RewardedAd,
//   RewardedAdEventType,
//   TestIds,
// } from "react-native-google-mobile-ads";
import Component3Screen from "./components/Component3Screen.js";
import Component4Screen from "./components/Component4Screen.js";
import Component1Screen from "./components/Component1Screen.js";
import AnswerComponent from "./utils/AnswerComponent.js";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AppContext from "./context.js";
import { useColorScheme } from "react-native";
import Dashboard from "./components/dashboard.js";

// const adUnitId = __DEV__
//   ? TestIds.REWARDED
//   : "ca-app-pub-1713281088911988~1804179792";

// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   keywords: ["fashion", "clothing"],
// });
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white", // Set background color to white
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Component2Stack = () => (
  <Stack.Navigator screenOptions={{
    cardStyle: { backgroundColor: "blue" },}}>
    <Stack.Screen name="Component2" component={Component2Screen} />
    <Stack.Screen name="Answer" component={AnswerComponent} />
  </Stack.Navigator>
);

export default function App() {
  const [isComponent1Unlocked] = useState(true);
  const [isComponent2Unlocked, setIsComponent2Unlocked] = useState(true);
  const [isComponent3Unlocked, setIsComponent3Unlocked] = useState(false);
  const [isComponent4Unlocked, setIsComponent4Unlocked] = useState(false);
  const [currentTab, setCurrentTab] = useState("Component1");
  const [isLoading, setIsLoading] = useState(false);



  const appContextValue = {
    isLoading,
    setIsLoading
  };

  const handleTabPress = (e) => {
    const tabName = e.target.split("-")[0];
    setCurrentTab(tabName);
    console.log("tab pressed")
    // Check if the tab needs to show a rewarded ad
    switch (tabName) {
      case "Component1":
        setIsLoading(false);
        break;
      case "Component2Stack":
        if (!isComponent2Unlocked) {
          //handleRewardedAd();
          setIsComponent2Unlocked(true);
        }
        break;
      case "Component3":
        if (!isComponent3Unlocked) {
          handleRewardedAd();
          setIsComponent3Unlocked(true);
        }
        break;
      case "Component4":
        if (!isComponent4Unlocked) {
          handleRewardedAd();
          setIsComponent4Unlocked(true);
        }
        break;
      default:
        break;
    }
  };

  // const showAd = () => {
  //   const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  //     requestNonPersonalizedAdsOnly: true,
  //     keywords: ["fashion", "clothing"],
  //   });

  //   const unsubscribeLoaded = rewarded.addAdEventListener(
  //     RewardedAdEventType.LOADED,
  //     () => {
  //       rewarded.show();
  //     }
  //   );

  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     (reward) => {
  //       setIsLoading(false);
  //     }
  //   );

  //   rewarded.load();
  // };

  const handleRewardedAd = () => {
    setIsLoading(true);
    //showAd();
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          // screenOptions={({ route }) => ({
          //   tabBarActiveBackgroundColor: "blue",
          //   headerTitle: "",
          //   headerStyle: { height: "10%" },
          // })}
          // screenListeners={{
          //   tabPress: handleTabPress,
          // }}
        >
          <Stack.Screen name="Component1" component={Dashboard}/>
          <Stack.Screen name="Component2Stack" component={Component2Stack} />
          <Stack.Screen name="Component3" component={Component3Screen} />
          <Stack.Screen name="Component4" component={Component4Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

