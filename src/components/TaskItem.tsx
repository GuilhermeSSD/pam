import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from '@futurejj/react-native-checkbox';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
}

export default function TaskItem({ task, toggleTask }: Props) {
  return (
    <View style={styles.taskItem}>
      <Checkbox
        status='checked'
      />
      <Text style={styles.taskLabel}>{task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});
