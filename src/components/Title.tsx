import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>Tarefas</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
});
