import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ id, title, isComplete, onDeleteTask, onTaskDone }) {


    

    return (
        <div className={`${styles.task} ${isComplete ? styles.taskDone : ""}`}>
            
            <label className={styles.container}>
                {title}
                <input type="checkbox" className={styles.checkbox} 
                onChange={() => onTaskDone(id)}
                />
                <span className={styles.checkmark}></span>
            </label>
            <button
                onClick={() => onDeleteTask(id)}
                title="Deletar tarefa"
                className={styles.deletebtn}
            >
                 <Trash size={24} />
            </button>
        </div>
    )
}