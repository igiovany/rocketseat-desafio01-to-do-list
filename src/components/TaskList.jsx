import { Task } from './Task';
import styles from './TaskList.module.css';

export function TaskList() {
    return (
        <div className={styles.container}>
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
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
             
        </div>
    )
}