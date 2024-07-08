import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '@/constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className={focused ? `justify-center items-center gap-1 pb-1` : `justify-center items-center`}
    >
      <Image 
        source={icon}
        style={{
          resizeMode: "contain",
          tintColor: color,
          width: 24,
          height: 24,
        }}
      />
      <Text 
        className={`${focused ? "font-psemibold" : "font-pregular"}`}
		style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
		  tabBarActiveTintColor: "#FFA001",
		  tabBarInactiveTintColor: "#CDCDE0",

        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="home"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen 
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen 
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 10,
	backgroundColor: "#161622",
  },
});

export default TabsLayout;