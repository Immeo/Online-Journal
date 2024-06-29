import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(function Input(
	{ className, isValid = true, appearence, ...props },
	ref
) {
	return (
		<div>
			<input
				{...props}
				ref={ref}
				className={cn(className, styles['form__input'], {
					[styles['journal__form-error']]: !isValid,
					[styles['form__title__input']]: appearence === 'title',
				})}
			/>
		</div>
	);
});
