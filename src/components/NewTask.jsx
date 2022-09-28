
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div className={styles.container}>
            <form>
                <input type="text" placeholder="Adicionar uma nova tarefa"/>
                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </div>
    )
}