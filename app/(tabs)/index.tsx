import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function index() {
  return (
    <ScreenWrapper>
      <Text className="text-xl text-blue-500 font-bold">
        Welcome to NativeWind!
      </Text>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Sign Up
      </Link>
      <Link href={"/subscriptions/spotify"}>Spotify Subscription</Link>
      <Link
        href={{ pathname: "/Subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max Subscription
      </Link>
    </ScreenWrapper>
  );
}
