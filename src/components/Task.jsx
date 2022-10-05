import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ title, isComplete }) {
    return (
        <div className={styles.task}>
            <label className={styles.container}>
                {title}
                <input type="checkbox" className={styles.checkbox} checked={isComplete} onChange={""}/>
                <span className={styles.checkmark}></span>
            </label>
            <button onClick="" title="Deletar comentário" className={styles.deletebtn}>
                 <Trash size={24} />
            </button>
        </div>
    )
}