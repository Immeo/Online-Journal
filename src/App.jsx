import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import { JournalList } from './components/JournalList/JournalList';
import { BodyContent } from './layouts/BodyContent/BodyContent';
import { LeftPanel } from './layouts/LeftPanel/LerftPanel';
import { shareData } from './utils/ShareData/ShareData';

const INITSIAL_DATA = shareData;

function App() {
	const [dataItems, setData] = useState(INITSIAL_DATA);

	const addDataItem = dataItem => {
		setData(oldAtaItem => [
			...oldAtaItem,
			{
				id: Math.max(...oldAtaItem.map(item => item.id)) + 1,
				title: dataItem.title,
				text: dataItem.text,
				date: new Date(dataItem.date),
			},
		]);
	};

	const sortDataItems = () => {
		setData(oldAtaItem => [...oldAtaItem].sort((a, b) => a.date - b.date));
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{dataItems.map(item => (
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
