import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View 
      className="flex-1 items-center justify-center"
      >
      <Text
        className="text-3xl"
      >
        Hello World!
      </Text>
      <Link 
        href="/profile"
		style={{ marginTop: 20 }}
		>
			Go to Profile
		</Link>
    </View>
  )
};

export default Index;