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
			disatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values, addDataItem]);

	const onChange = e => {
		disatchForm({
			type: 'INPUT_CHANGE',
			payload: { [e.target.name]: e.target.value },
		});
	};

	const addNotes = e => {
		e.preventDefault();
		disatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addNotes}>
			<div>
				<input
					value={values.title}
					onChange={onChange}
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
					value={values.date}
					onChange={onChange}
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
					value={values.tag}
					onChange={onChange}
					className={cn(styles['form__input'], {
						[styles['journal__form-error']]: !isValid.title,
					})}
					name='tag'
					id='form__tag'
					placeholder='Enter tag'
				/>
			</div>
			<textarea
				value={values.text}
				onChange={onChange}
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
