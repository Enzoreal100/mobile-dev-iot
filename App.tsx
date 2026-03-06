import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [clicks, getClicks] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => getClicks(clicks + 1)} />
      <Text>You have pressed the button {clicks} times.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
