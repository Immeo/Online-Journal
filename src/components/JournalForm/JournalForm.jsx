import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Button } from '../Buttom/Button';
import styles from './JournalForm.module.css';

const INITIAL_STATE = {
	title: true,
	text: true,
	date: true,
};

export function JournalForm({ addDataItem }) {
	const [formValidatorState, setFormValidatorState] = useState(INITIAL_STATE);

	useEffect(() => {
		if (
			!formValidatorState.title ||
			!formValidatorState.text ||
			!formValidatorState.date
		) {
			setTimeout(() => {
				setFormValidatorState(INITIAL_STATE);
			}, 3000);
		}
		return () => {
			clearTimeout();
		};
	}, [formValidatorState]);

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
			<div>
				<input
					type='text'
					name='title'
					value={inputData}
					onChange={handleChange}
					className={cn(styles['form__title__input'], [
						formValidatorState.title ? '' : styles['journal__form-error'],
					])}
					placeholder='Title'
				/>
			</div>
			<div className={styles['form__row']}>
				<label htmlFor='form__label' className={styles['form__label']}>
					<img src='/calendarIcon.svg' alt='Add date icon' />
					<span>Date</span>
				</label>
				<input
					type='date'
					name='date'
					id='form__date'
					className={cn(styles['form__input'], [
						formValidatorState.date ? '' : styles['journal__form-error'],
					])}
					placeholder='Enter date'
				/>
			</div>
			<div className={styles['form__row']}>
				<label htmlFor='form__tag' className={styles['form__label']}>
					<img src='/tagIcon.svg' alt='Add tag icon' />
					<span>Tag</span>
				</label>
				<input
					className={cn(styles['form__input'], [
						formValidatorState.title ? '' : styles['journal__form-error'],
					])}
					name='tag'
					id='form__tag'
					placeholder='Enter tag'
				/>
			</div>
			<textarea
				name='text'
				cols='30'
				rows='10'
				className={cn(styles['form__input'], [
					formValidatorState.text ? '' : styles['journal__form-error'],
				])}
			></textarea>
			<Button text='Save' />
		</form>
	);
}
