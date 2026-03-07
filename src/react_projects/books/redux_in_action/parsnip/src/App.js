import React, { Component } from 'react';
import TasksPage from './components/TasksPage';

const mockTasks = [
  { id: 1,
    title: 'Learn redux', 
    description: 'The store, actions, and reducers, oh my!', 
    status: 'Unstarted' },
  { id: 2, 
    title: 'Data Science', 
    description: "datacamp course", 
    status: 'In Progress' },
  { id: 3, 
    title: 'Figma Marathon', 
    description: 'Designing a new user interface', 
    status: 'Completed' 
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksPage tasks={mockTasks} />
      </div>
    );
  }
}

export default App;
