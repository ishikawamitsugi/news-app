import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeSceen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClipScreen from "../screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeSceen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }: any) => {
  return {
    tabBarIcon: ({ color, size }: any) => {
      let iconName: string;

      if (route.name === "Home") {
        return <FontAwesome name={"home"} size={size} color={color} />;
      } else if (route.name === "Clip") {
        return <FontAwesome name={"bookmark"} size={size} color={color} />;
      } else {
        return <FontAwesome name={"home"} size={size} color={color} />;
      }
    },
  };
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name={"Home"} component={HomeStack} />
        <Tab.Screen name={"Clip"} component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
