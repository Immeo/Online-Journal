import './App.css';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import { JournalList } from './components/JournalList/JournalList';
import { UserContext } from './context/user.context';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { BodyContent } from './layouts/BodyContent/BodyContent';
import { LeftPanel } from './layouts/LeftPanel/LerftPanel';

function mapItems(items) {
	if (!items) {
		return [];
	}
	console.log(items);
	return items.map(i => ({
		...i,
		date: new Date(i.date),
	}));
}

function App() {
	const [dataItems, setData] = useLocalStorage('localData');

	const addDataItem = dataItem => {
		if (!dataItem.id) {
			setData([
				...mapItems(dataItems),
				{
					id:
						dataItems.length > 0
							? Math.max(...dataItems.map(i => i.id)) + 1
							: 1,
					title: dataItem.title,
					text: dataItem.text,
					date: new Date(),
				},
			]);
		}
	};

	return (
		<UserContext.Provider value={{ userId: 1 }}>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList items={mapItems(dataItems)} />
				</LeftPanel>
				<BodyContent>
					<JournalForm addDataItem={addDataItem} />
				</BodyContent>
			</div>
		</UserContext.Provider>
	);
}

export default App;
