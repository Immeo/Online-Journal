import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

export function JournalAddButton() {
	return (
		<CardButton stylingButton={styles['journal-add']}>
			<img src='/plusIcon.svg' alt='add post icon' /> New post
		</CardButton>
	);
}
