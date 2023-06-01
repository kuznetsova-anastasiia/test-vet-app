import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";


export const ErrorMessage = ({ message, setError }) => {
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, []);

  return (
    <Pressable
      style={styles.message}
      onPress={() => setError(false)}
    >
      <Text style={styles.messageText}>
        {message}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  message: {
    position: 'absolute',
    top: '10%',
    right: 0,
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    transition: '700ms'
  },
  messageText: {
    fontFamily: 'outfit-m',
    textAlign: 'center'
  }
})