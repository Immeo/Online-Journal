import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

export default function JournalList({ items }) {
	const { userId } = useContext(UserContext);

	if (items.length === 0) {
		return <p>There are no notes yet, add the first one</p>;
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	const filteredItems = useMemo(
		() => items.filter(el => el.userId === userId).sort(sortItems),
		[items, userId]
	);

	return (
		<>
			{filteredItems.map(el => (
				<CardButton key={el.id}>
					<JournalItem title={el.title} text={el.text} date={el.date} />
				</CardButton>
			))}
		</>
	);
}
