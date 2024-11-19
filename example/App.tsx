/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { Text } from "react-native";
import { RTNCenteredText } from "rtn-centered-text";

console.log(RTNCenteredText);

const App: () => JSX.Element = () => {
  return (
    // <Text>HHello</Text>
    <RTNCenteredText
      text="Hello World!"
      style={{ width: "100%", height: 30 }}
    />
  );
};
export default App;
