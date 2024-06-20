import styles from './BodyContent.module.css'

export function BodyContent({children}) {
	return (
		<div className={styles['body-content']}>
			{children}
		</div>
	)
}
