import styles from './Button.module.css';

export function Button({ children, onClick }) {
	return (
		<div>
			<button onClick={onClick} className={`${styles.button} ${styles.accent}`}>
				{children}
			</button>
		</div>
	);
}
