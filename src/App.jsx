import { Header } from './components/Header'
import styles from './App.module.css';

import './global.css'
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <TaskList />
    </>
  )
}