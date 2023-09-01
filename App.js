import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState(0);
  const [upperHeartrate, setUpperHeartrate] = useState(0);
  const [lowerHeartrate, setLowerHeartrate] = useState(0);

  function calculate() {
    setUpperHeartrate((220 - age) * 0.85);
    setLowerHeartrate((220 - age) * 0.65);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        onChangeText={setAge} // This is called when the user types something into the field
        value={age}
        keyboardType="numeric"
        onSubmitEditing={calculate} // This is called when the user presses the "Done" button on the keyboard
      />
      <Text style={styles.field}>Heartrate Limits</Text>
      <Text style={styles.field}>
        {lowerHeartrate.toFixed(0)} - {upperHeartrate.toFixed(0)} bpm
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
});
