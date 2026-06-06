import { styled } from "nativewind";
import React from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = styled(RNSafeAreaView);

export const ScreenWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <StyledSafeAreaView className="flex-1 bg-background p-5">
      {children}
    </StyledSafeAreaView>
  );
};
