import cn from 'classnames';
import { useEffect, useReducer } from 'react';
import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

export function JournalForm({ addDataItem }) {
	const [formState, disatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerIs;
		if (!isValid.title || !isValid.text || !isValid.date) {
			setTimeout(() => {
				disatchForm({ type: 'RESET_VALIDITY' });
			}, 3000);
		}
		return () => {
			clearTimeout(timerIs);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			addDataItem(values);
		}
	}, [isFormReadyToSubmit]);

	const addNotes = e => {
		e.preventDefault();
		const data = new FormData(e.target);
		const value = Object.fromEntries(data);
		disatchForm({ type: 'SUBMIT', payload: value });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addNotes}>
			<div>
				<input
					type='text'
					name='title'
					className={cn(styles['form__title__input'], {
						[styles['journal__form-error']]: !isValid.title,
					})}
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
					className={cn(styles['form__input'], {
						[styles['journal__form-error']]: !isValid.date,
					})}
					placeholder='Enter date'
				/>
			</div>
			<div className={styles['form__row']}>
				<label htmlFor='form__tag' className={styles['form__label']}>
					<img src='/tagIcon.svg' alt='Add tag icon' />
					<span>Tag</span>
				</label>
				<input
					className={cn(styles['form__input'], {
						[styles['journal__form-error']]: !isValid.title,
					})}
					name='tag'
					id='form__tag'
					placeholder='Enter tag'
				/>
			</div>
			<textarea
				name='text'
				cols='30'
				rows='10'
				className={cn(styles['form__input'], {
					[styles['journal__form-error']]: !isValid.text,
				})}
			></textarea>
			<Button text='Save' />
		</form>
	);
}
