import styles from './CardButton.module.css';

export default function CardButton({ children, stylingButton, ...props }) {
	const classChecking = `${styles['card-button']} ${
		stylingButton ? stylingButton : ''
	}`;

	return (
		<button {...props} className={`${classChecking}`}>
			{children}
		</button>
	);
}
