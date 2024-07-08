import styles from './CardButton.module.css';

export default function CardButton({ children, stylingButton }) {
	const classChecking = `${styles['card-button']} ${
		stylingButton ? stylingButton : ''
	}`;

	return <button className={`${classChecking}`}>{children}</button>;
}
