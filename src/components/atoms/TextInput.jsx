import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Octicons name="search" size={24} color="black" />
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: "100%",
    backgroundColor: "#eeeeee",
    // borderRadius: 99,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginRight: 8,
    marginLeft: 15,
  },
  input: {
    width: "100%",
  },
});
