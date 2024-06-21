import { useState } from 'react';
import { Button } from '../Buttom/Button';
import styles from './JournalForm.module.css';

export function JournalForm({ addDataItem }) {
	const [inputData, setInputData] = useState('');
	const handleChange = e => {
		setInputData(e.target.value);
	};

	const addNotes = e => {
		e.preventDefault();
		const data = new FormData(e.target);
		const value = Object.fromEntries(data);
		addDataItem(value);
	};

	return (
		<form action='/' className={styles['journal-form']} onSubmit={addNotes}>
			<input
				type='text'
				name='title'
				value={inputData}
				onChange={handleChange}
			/>
			<input type='date' name='date' />
			<input className={styles['form-input']} name='tag' />
			<textarea name='text' cols='30' rows='10'></textarea>
			<Button text='Save' />
		</form>
	);
}
