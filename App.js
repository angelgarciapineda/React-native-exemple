import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://i.picsum.photos/id/1064/200/200.jpg?hmac=xUH-ovzKEHg51S8vchfOZNAOcHB6b1TI_HzthmqvcWU",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Hola, ser sin razón</Text>
      <Text>Dime tu nombre</Text>
      <Separator />

      <Button title="Press me" onPress={() => console.log("Dimne tu nombre")} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },

  title: { fontSize: 25, color: "#fff" },
  image: { width: 200, height: 200 },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
