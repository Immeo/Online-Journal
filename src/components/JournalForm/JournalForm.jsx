import cn from 'classnames';
import { useEffect, useReducer, useRef } from 'react';
import { UserContext } from '../../context/user.context';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

export function JournalForm({ addDataItem }) {
	const [formState, disatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const textRef = useRef();
	const dateRef = useRef();

	const focusError = isValid => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.text:
				textRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
		}
	};

	useEffect(() => {
		let timerIs;
		if (!isValid.title || !isValid.text || !isValid.date) {
			focusError(isValid);
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
		<UserContext.Consumer>
			{context => (
				<form className={styles['journal-form']} onSubmit={addNotes}>
					{context.userId}
					<div>
						<Input
							ref={titleRef}
							value={values.title}
							isValid={isValid.title}
							onChange={onChange}
							type={'text'}
							name='title'
							placeholder='Title'
							appearence='title'
						/>
					</div>
					<div className={styles['form__row']}>
						<label htmlFor='form__label' className={styles['form__label']}>
							<img src='/calendarIcon.svg' alt='Add date icon' />
							<span>Date</span>
						</label>
						<Input
							ref={dateRef}
							value={values.date}
							isValid={isValid.date}
							onChange={onChange}
							type='date'
							name='date'
							id='form__date'
							placeholder='Enter date'
						/>
					</div>
					<div className={styles['form__row']}>
						<label htmlFor='form__tag' className={styles['form__label']}>
							<img src='/tagIcon.svg' alt='Add tag icon' />
							<span>Tag</span>
						</label>
						<Input
							value={values.tag}
							onChange={onChange}
							name='tag'
							id='form__tag'
							placeholder='Enter tag'
						/>
					</div>
					<textarea
						ref={textRef}
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
			)}
		</UserContext.Consumer>
	);
}
