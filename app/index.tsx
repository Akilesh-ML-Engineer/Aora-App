import React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Index = () => {
    return (
        <SafeAreaView
            className="bg-primary h-full"
        >
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View
                    className={`w-full h-full justify-center items-center px-4`}
                >
                    <Image
                        source={images.logo}
                        style={{
                            resizeMode: "contain",
                            width: 134,
                            height: 84,
                        }}
                    />
                    <Image
                        source={images.cards}
                        className={`max-w-[380px] w-full h-[300px]`}
                        resizeMode="contain"
                    />
                    <View
                        className="relative mt-5 max-w-[300px]"
                    >
                        <Text
                            className="text-3xl text-white font-bold text-center"
                        >
                            Discover Endless Possibility With{' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className={`absolute -bottom-2 -right-8 w-[136px] h-[15px]`}
                            resizeMode="contain"
                        />
                    </View>
                    <Text
                        className="text-sm font-pregular text-gray-100 mt-7 text-center max-w-[320px]"
                    >
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora
                    </Text>
                    <CustomButton 
                        title={"Continue with Email"}
                        handlePress={()=> router.push("/(auth)/sign-in")}
                        containerStyles={`w-fullmt-7 mt-7`}
                    />
                </View>
            </ScrollView>
            <StatusBar 
                backgroundColor="#161622"
                style="light"
            />
        </SafeAreaView>
    );
};

export default Index;