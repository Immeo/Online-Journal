import styles from './Button.module.css';

export function Button({ text }) {
	return (
		<div>
			<button className={`${styles.button} ${styles.accent}`}>{text}</button>
		</div>
	);
}
