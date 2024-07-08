import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading = false }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
	  className={`bg-secondary rounded-xl min-h-[56px] justify-center items-centerm px-4 ${containerStyles} ${isLoading ? "opacity-50" : ""}}
      disabled={isLoading`}
    >
      <Text
		className={`text-primary font-psemibold text-lg ${textStyles}`}
	  >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;