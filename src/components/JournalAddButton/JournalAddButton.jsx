import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

export default function JournalAddButton({ clearForm }) {
	return (
		<CardButton stylingButton={styles['journal-add']} onClick={clearForm}>
			<img src='/plusIcon.svg' alt='add post icon' /> New notes
		</CardButton>
	);
}
