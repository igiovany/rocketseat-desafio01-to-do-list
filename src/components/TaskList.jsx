import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import styles from './TaskList.module.css';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import clipboardicon from '../assets/clipboard.svg';



export function TaskList() {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: 'Arrumar a cama',
            isComplete: false,
        },
        {
            id: uuidv4(),
            title: 'Dar banho no cachorro',
            isComplete: false,
        },
        {
            id: uuidv4(),
            title: 'Fazer almoço',
            isComplete: false,
        }
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask() { 
        event.preventDefault();

        const newTaskContent = {
            id: uuidv4(),
            title: newTaskText,
            isComplete: false
        }

        setTasks([...tasks, newTaskContent]);

        setNewTaskText('');
    }

    function handleNewTaskChange() {
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete) {
        const tasksWithoutDeletedOne =  tasks.filter(task => {
            return task.id !== taskToDelete;
        })
        setTasks(tasksWithoutDeletedOne);
    }


    function handleTaskDone(taskId){
        const newTasks = tasks.map((task) => {
          if(task.id === taskId){
            task.isComplete = !task.isComplete
            return task
          }
          return task
        })
        
    
        setTasks(newTasks)
        setNewTaskText('')

        // Solução alternativa - Mover as tasks concluídas para o final:
        // const tasksIsComplete = newTasks.filter((task => task.isComplete === true))
        // const tasksToDo = newTasks.filter((task => task.isComplete === false))
    
        // const newTasksOrderedByToDo = tasksToDo.concat(tasksIsComplete)

        // setTasks(newTasksOrderedByToDo)
    }

    const createdTaksCounter = tasks.length;
    const totalOfCompletedTasks = tasks.reduce((counter, obj) => {
        if (obj.isComplete === true) counter += 1
        return counter;
    }, 0);


    return (
        <div>
            <div className={styles.newtask}>
                <form onSubmit={handleCreateNewTask}>
                    <input
                        type="text"
                        placeholder="Adicionar uma nova tarefa"
                        value={newTaskText}
                        onChange={handleNewTaskChange}
                        required
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
                        <p className={styles.counter}>{createdTaksCounter}</p>
                    </div>
                    <div className={styles.taskcounter}>
                        <p className={styles.label}>Tarefas concluídas</p>
                        <p className={styles.counter}>
                            {
                                createdTaksCounter === 0
                                ? 0
                                : `${totalOfCompletedTasks} de ${tasks.length}`
                            }
                        </p>
                    </div>

                    
                </div>

                {
                    tasks.length !== 0 ? (
                        tasks.map(task => {
                            return (
                                <Task 
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    isComplete={task.isComplete}
                                    onDeleteTask={deleteTask}
                                    onTaskDone={handleTaskDone}
                                />
                            )
                        })
                    ) : (
                        <div className={styles.emptytasklist}>
                            <img src={clipboardicon} alt="Clipboard icon" />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    )
                }                
            </div>
        </div>
    )
}