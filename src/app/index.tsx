import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Title from '../components/Title';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Title />
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleAddTask={handleAddTask}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleTask={toggleTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});
