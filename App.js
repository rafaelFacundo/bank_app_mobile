import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InitialScreen from "./src/screens/InitialScreen";
import useLoadInitialData from "./src/hooks/useLoadInitialData";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  const { isReady } = useLoadInitialData();

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <InitialScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
