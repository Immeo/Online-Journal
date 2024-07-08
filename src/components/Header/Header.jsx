import { useState } from 'react';
import Button from '../Button/Button';
import Logotype from '../Logotype/Logotype';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/personal-journal.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<header className={styles['Header']}>
			<Logotype image={logos[logoIndex]} />
			<Button onClick={toggleLogo}>Switch logo</Button>
			<SelectUser />
		</header>
	);
}

export default Header;
