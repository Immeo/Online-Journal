import { useState } from 'react';
import { Button } from '../Button/Button';
import { SelectUser } from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/personal-journal.svg'];

export function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<header className={styles['Header-style']}>
			<img width='180pеx' src={logos[logoIndex]} />
			<Button onClick={toggleLogo}>Switch logo</Button>
			<SelectUser />
		</header>
	);
}
