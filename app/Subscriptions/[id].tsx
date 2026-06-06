import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Href, Link } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { Text } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScreenWrapper>
      <Text>Subscription Details: {id}</Text>
      <Link href={"/" as Href}>Go Back</Link>
    </ScreenWrapper>
  );
};

export default SubscriptionDetails;
