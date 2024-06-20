import styles from './JournalList.module.css'

export function JournalList({ children }) {
	return <div className={styles['journal-list']}>{children}</div>
}
