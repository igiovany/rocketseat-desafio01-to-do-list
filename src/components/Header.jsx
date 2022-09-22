import styles from './Header.module.css';

import todoicon from '../assets/todo-icon.svg';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={todoicon} alt="Logotipo da To Do List" />
            <span>to</span>
            <span>do</span>
        </div>
    )
}