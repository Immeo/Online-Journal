import styles from './JournalItem.module.css'

function JournalItem({ title, text, date }) {
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date)
	function textSizeLimiter(text) {
		return text.length > 30 ? text.slice(0, 30) + '...' : text
	}

	return (
		<div className={styles['journal-item__block']}>
			<h2 className={styles['journal-item__header']}>{title}!</h2>
			<h2 className={styles['journal-item__body']}>
				<time className={styles['journal-item__date']}>{formattedDate}</time>
				<div className={styles['journal-item__text']}>
					{textSizeLimiter(text)}
				</div>
			</h2>
		</div>
	)
}

export default JournalItem