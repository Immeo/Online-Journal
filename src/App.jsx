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

function App() {
	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem
							title={shareData[0].title}
							text={shareData[0].text}
							date={shareData[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={shareData[1].title}
							text={shareData[1].text}
							date={shareData[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<BodyContent>
				<JournalForm />
			</BodyContent>
		</div>
	);
}

export default App;
