import { useEffect, useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import { JournalList } from './components/JournalList/JournalList';
import { BodyContent } from './layouts/BodyContent/BodyContent';
import { LeftPanel } from './layouts/LeftPanel/LerftPanel';

function App() {
	const [dataItems, setData] = useState([]);
	useEffect(() => {
		const localStoreData = JSON.parse(localStorage.getItem('localData'));
		if (localStoreData) {
			setData(
				localStoreData.map(item => ({
					...item,
					date: new Date(item.date),
				}))
			);
		}
	}, []);
	useEffect(() => {
		if (dataItems.length) {
			localStorage.setItem('localData', JSON.stringify(dataItems));
		}
	}, [dataItems]);

	const addDataItem = dataItem => {
		setData(oldAtaItem => [
			...oldAtaItem,
			{
				id:
					oldAtaItem.length > 0
						? Math.max(...oldAtaItem.map(item => item.id)) + 1
						: 1,
				title: dataItem.title,
				text: dataItem.text,
				date: new Date(dataItem.date),
			},
		]);
	};

	const sortDataItems = (a, b) => {
		if (a.date > b.date) {
			return -1;
		} else if (a.date < b.date) {
			return 1;
		}
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{dataItems.length === 0
						? 'The notes are empty. Add a new note'
						: dataItems.sort(sortDataItems).map(item => (
								<CardButton key={item.id}>
									<JournalItem
										title={item.title}
										text={item.text}
										date={item.date}
									/>
								</CardButton>
						  ))}
				</JournalList>
			</LeftPanel>
			<BodyContent>
				<JournalForm addDataItem={addDataItem} />
			</BodyContent>
		</div>
	);
}

export default App;
