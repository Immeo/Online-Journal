import { SelectUser } from '../SelectUser/SelectUser';
import styles from './Header.module.css';
import logo from '/logo.svg';

export function Header() {
	return (
		<header className={styles['Header-style']}>
			<img src={logo} />
			<SelectUser />
		</header>
	);
}
