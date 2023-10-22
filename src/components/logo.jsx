import logo from '../assets/logo-light.png';
import logo_dark from '../assets/logo-dark.png';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function Logo(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<>{ props.isNotification ? <img
			src={props.themeMode === 'dark' ? logo : logo_dark}
			style={{ marginLeft: 5, marginTop: 10 }}
			width={25}
		/> :
			<Button disableRipple LinkComponent={RouterLink} to='/'>
				<img
					src={props.themeMode === 'dark' ? logo : logo_dark}
					style={{ marginLeft: 5, marginTop: 10 }}
					height={isMobile ? 60 : 80}
				/>
			</Button>}
		</>
	);
}