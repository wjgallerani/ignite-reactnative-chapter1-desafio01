import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

interface ITask {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    if (!newTaskTitle) {
      Alert.alert('Titulo vazio, favor informa-lo.');
      return;
    }

    const data: ITask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    //setTasks(oldState => [...oldState, data]);
    const newData = [...tasks, data];

    setTasks(newData);

  }

  function handleToggleTaskDone(id: number) {
    const newTasks = [...tasks];

    //TODO - toggle task done if exists
    const task = newTasks.find(task => task.id === id);

    if (!task) {
      return;
    }

    task.done = !task.done;

    //const newTask = [...new Set([task, ...tasks])];

    setTasks(newTasks);

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const filterTasks = tasks.filter(task => task.id !== id);

    setTasks(filterTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})