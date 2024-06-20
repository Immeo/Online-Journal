import CardButton from '../../components/CardButton/CardButton'
import { JournalList } from '../../components/JournalList/JournalList'
import styles from './LeftPanel.module.css'

export function LeftPanel({children}) {
	return (
		<div className={styles['left-panel']}>
			{children}
		</div>
	)
}
