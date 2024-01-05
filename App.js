import "./src/services/translation/i18";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useLoadInitialData from "./src/hooks/useLoadInitialData";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import Navigation from "./src/components/Navigation/Navigation";

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
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
