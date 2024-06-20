import styles from './Button.module.css'
import { useState } from 'react'

export function Button() {
	const [NameButton, setNameButton] = useState('op')
	function checkClick() {
		setNameButton(prompt)
	}
	return (
		<div>
			<button
				onClick={checkClick}
				className={`${styles.button} ${styles.accent}`}
			>
				{NameButton}
			</button>
		</div>
	)
}
