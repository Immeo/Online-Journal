import cn from 'classnames';
import { useState } from 'react';
import { Button } from '../Buttom/Button';
import styles from './JournalForm.module.css';

export function JournalForm({ addDataItem }) {
	const [formValidatorState, setFormValidatorState] = useState({
		title: true,
		text: true,
		date: true,
	});

	const [inputData, setInputData] = useState('');
	const handleChange = e => {
		setInputData(e.target.value);
	};

	const addNotes = e => {
		e.preventDefault();
		const data = new FormData(e.target);
		const value = Object.fromEntries(data);
		let isValidForm = true;
		if (!value.title?.trim().length) {
			setFormValidatorState(prev => ({
				...prev,
				title: false,
			}));
			isValidForm = false;
		} else {
			setFormValidatorState(prev => ({ ...prev, title: true }));
		}
		if (!value.text?.trim().length) {
			setFormValidatorState(prev => ({
				...prev,
				text: false,
			}));
			isValidForm = false;
		} else {
			setFormValidatorState(prev => ({ ...prev, text: true }));
		}
		if (!value.date) {
			setFormValidatorState(prev => ({
				...prev,
				date: false,
			}));
			isValidForm = false;
		} else {
			setFormValidatorState(prev => ({ ...prev, date: true }));
		}
		if (!isValidForm) {
			return;
		}
		addDataItem(value);
	};

	return (
		<form action='/' className={styles['journal-form']} onSubmit={addNotes}>
			<input
				type='text'
				name='title'
				value={inputData}
				onChange={handleChange}
				className={cn(styles['form__title__input'], [
					formValidatorState.title ? '' : styles['journal__form-error'],
				])}
			/>
			<input
				type='date'
				name='date'
				className={formValidatorState.date ? '' : styles['journal__form-error']}
			/>
			<input className={styles['form-input']} name='tag' />
			<textarea
				name='text'
				cols='30'
				rows='10'
				className={formValidatorState.text ? '' : styles['journal__form-error']}
			></textarea>
			<Button text='Save' />
		</form>
	);
}
