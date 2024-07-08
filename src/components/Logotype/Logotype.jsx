import { memo } from 'react';

function Logotype({ image }) {
	return <img src={image} width='180px' height='60px' alt='Logotype' />;
}
export default memo(Logotype);
