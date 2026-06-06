import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function index() {
  return (
    <ScreenWrapper>
      <Text className="text-5xl text-blue-500 font-bold">Home </Text>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Sign Up
      </Link>
    </ScreenWrapper>
  );
}
