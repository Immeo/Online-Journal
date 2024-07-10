import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import { UserContextProvider } from './context/user.context';
import useLocalStorage from './hooks/use-localstorage.hook';
import BodyContent from './layouts/BodyContent/BodyContent';
import LeftPanel from './layouts/LeftPanel/LerftPanel';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date),
	}));
}

function App() {
	const [dataItems, setData] = useLocalStorage('localData');
	const [selectedItem, setSelectedItem] = useState({});

	const addDataItem = dataItem => {
		if (!dataItem.id) {
			setData([
				...mapItems(dataItems),
				{
					id:
						dataItems.length > 0
							? Math.max(...dataItems.map(i => i.id)) + 1
							: 1,
					...dataItem,
					date: new Date(),
				},
			]);
		} else {
			setData([
				...mapItems(dataItems).map(i => {
					if (i.id === dataItem.id) {
						return {
							...dataItem,
						};
						return i;
					}
				}),
			]);
		}
	};

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={mapItems(dataItems)} setItem={setSelectedItem} />
				</LeftPanel>
				<BodyContent>
					<JournalForm addDataItem={addDataItem} data={selectedItem} />
				</BodyContent>
			</div>
		</UserContextProvider>
	);
}

export default App;
