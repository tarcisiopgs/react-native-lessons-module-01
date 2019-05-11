import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from '~/components/Todo';

export default class App extends Component {
  state = {
    usuario: 'Tarcísio',
    todos: [
      {
        id: 0,
        text: 'Fazer café'
      },
      {
        id: 1,
        text: 'Estudar o GoNative'
      }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo todo' }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café" />
        <Todo title="Fazer café" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      {
        rotateZ: '20deg'
      }
    ]
  },
  boxText: {
    color: '#fff'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24
  }
});
