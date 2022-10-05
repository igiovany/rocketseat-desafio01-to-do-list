import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import styles from './TaskList.module.css';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';


export function TaskList() {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: 'Task1',
            isComplete: true,
        },
        {
            id: uuidv4(),
            title: 'Task2',
            isComplete: false,
        },
        {
            id: uuidv4(),
            title: 'Task3',
            isComplete: false,
        },
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask() { 
        event.preventDefault();

        setTasks([...tasks, {
            id: uuidv4(),
            title: newTaskText,
            isComplete: false,
        }]);

        setNewTaskText('');
    }

    function handleNewTaskChange() {
        setNewTaskText(event.target.value);
    }

    return (
        <div>
            <div className={styles.newtask}>
                <form onSubmit={handleCreateNewTask}>
                    <input
                        type="text"
                        name="sabonete"
                        placeholder="Adicionar uma nova tarefa"
                        value={newTaskText}
                        onChange={handleNewTaskChange}
                    />
                    <button type="submit">
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </form>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.taskcounter}>
                        <p className={styles.label}>Tarefas criadas</p>
                        <p className={styles.counter}>0</p>
                    </div>
                    <div className={styles.taskcounter}>
                        <p className={styles.label}>Tarefas concluídas</p>
                        <p className={styles.counter}>0</p>
                    </div>

                    
                </div>
                <div className={styles.tasks}>
                    {tasks.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                title={task.title}
                                isComplete={task.isComplete}
                            />
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}