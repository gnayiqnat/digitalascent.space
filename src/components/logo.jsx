import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const logo = './logo/logo-light.png';
const logo_dark = './logo/logo-dark.png';

export default function Logo(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<>{ props.isNotification ? <img
			src={props.themeMode === 'dark' ? logo : logo_dark}
			style={{ marginLeft: 5, marginTop: 10 }}
			width={25}
		/> :
			<RouterLink to='/'>
				<img
					src={props.themeMode === 'dark' ? logo : logo_dark}
					style={{ marginLeft: 5, marginTop: 10 }}
					height={isMobile ? 60 : 80}
				/>
			</RouterLink>}
		</>
	);
}