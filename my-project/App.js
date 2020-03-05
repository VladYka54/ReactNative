import React from 'react'
import { StyleSheet, SafeAreaView, View, Platform, StatusBar, KeyboardAvoidingView} from 'react-native'
import Todo from './src/todo'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.todoContainer}
        >
          <Todo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  todoContainer: {
    flex: 1,
  }
});
