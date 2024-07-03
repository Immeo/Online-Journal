import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

export function SelectUser() {
	const { userId } = useContext(UserContext);
	return (
		<>
			<select name='user' className={styles.select} value={userId} id='user'>
				<option value='1'>hd333</option>
				<option value='2'>io245</option>
			</select>
		</>
	);
}
