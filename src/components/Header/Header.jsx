import Logotype from '../Logotype/Logotype';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles['Header']}>
			<Logotype image={'./personal-journal.svg'} />
			<SelectUser />
		</header>
	);
}

export default Header;
