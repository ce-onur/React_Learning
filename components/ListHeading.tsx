import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ListHeading = ({ title, onViewAllPress }: ListHeadingProps) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      {onViewAllPress ? (
        <TouchableOpacity
          className="list-action"
          onPress={onViewAllPress}
          accessibilityRole="button"
        >
          <Text className="text-action-list">View All</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ListHeading;
