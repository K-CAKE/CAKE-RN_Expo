import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarActiveTintColor: '#F02F04',
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          minHeight: 85,
        },
        tabBarBackground: () => (
          <BlurView 
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: "hidden", 
            }} 
          />
        ),
      }}
    >
      <Tabs.Screen
        name="way"
        options={{
          title: "Way",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 
              name={focused ? "map-marked-alt" : "map"} 
              size={24} 
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="taxi"
        options={{
          title: "Taxi",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="taxi" size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}        
      />
      <Tabs.Screen
        name="delivery"
        options={{
          title: "Delivery",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "fast-food" : "fast-food-outline"}
              size={27}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "Mypage",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
