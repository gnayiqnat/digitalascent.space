import {
	Typography,
	Container,
	Button,
	IconButton,
	Fab,
	Box,
	AppBar,
	Toolbar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	CssBaseline,
} from '@mui/material';
import { motion } from 'framer-motion';

export default function About(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'>
			<AboutSec1 />
		</motion.div>
	);
}

function AboutSec1() {
	return (
		<>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<Typography gutterBottom variant='h3' align='center' fontFamily='Monoton'>
					ABOUT
				</Typography>
				<Typography color={'white'} fontWeight={300} variant='p' align='center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
					sapien sit amet rutrum egestas. Aliquam semper mauris ac lectus
					elementum vestibulum. Ut consectetur consectetur rhoncus. Donec a
					rutrum arcu. Maecenas non nulla volutpat, porta lorem ut, lobortis
					augue. Nullam blandit, mauris a commodo pulvinar, ex enim sollicitudin
					mi, quis porttitor elit nisl et risus. Cras ut sollicitudin sapien,
					faucibus auctor nibh. Aliquam ac libero eu nisi viverra laoreet quis
					eget eros. Curabitur enim tellus, posuere quis vulputate eget,
					accumsan sed elit. Donec lobortis varius enim non efficitur. Cras nec
					arcu ullamcorper, convallis nisi in, hendrerit tellus. Praesent et
					rhoncus massa. Morbi imperdiet leo vitae iaculis interdum. Proin ut
					dignissim diam. Donec a pellentesque erat, in suscipit velit. Aliquam
					blandit, felis quis malesuada luctus, lacus risus pellentesque tortor,
					sed ultrices ante lectus in purus. Praesent lacinia porta tellus ac
					sagittis. Nunc consectetur accumsan lacus vel pellentesque. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos. Aliquam tempor leo enim. Suspendisse consectetur
					blandit magna, non mollis lectus mattis sed. Aliquam euismod lacus in
					feugiat consectetur. Mauris fermentum facilisis dolor, quis interdum
					libero luctus ac. Mauris vestibulum leo sed orci sodales lacinia.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Suspendisse at faucibus purus. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac
					turpis egestas. Fusce tempor, turpis non hendrerit mattis, tortor
					lectus maximus sem, id tincidunt lorem nulla in leo. Sed mollis justo
					orci, ac aliquet eros dapibus porta. Curabitur tincidunt dapibus mi a
					consequat. Etiam molestie augue vel sollicitudin viverra. Quisque
					imperdiet neque tellus, vitae bibendum ex porta id. Nam turpis nisi,
					rhoncus ultricies lectus at, ultricies porta felis. Aenean auctor
					fringilla elit. Praesent finibus purus lectus, ut tristique purus
					vulputate eget. In eget justo egestas turpis laoreet efficitur non
					fringilla lacus. Nulla in massa ex. Etiam posuere, dolor non auctor
					condimentum, diam quam fringilla risus, non malesuada felis sapien at
					nisl. Suspendisse commodo sapien vitae quam auctor, et viverra nisl
					feugiat. Aliquam fermentum libero in leo ultrices congue. Pellentesque
					pellentesque elementum mi, id fermentum magna maximus ac. Proin
					imperdiet ligula sit amet orci pulvinar fringilla. Nam auctor diam a
					congue placerat. Quisque vitae suscipit ipsum. Donec id libero a leo
					consectetur ornare vel in neque. Duis vel posuere dui, non faucibus
					tellus. Ut dictum leo diam, a pellentesque justo volutpat sed. In
					maximus lacus sit amet efficitur viverra. Cras rutrum erat in purus
					egestas rhoncus. Nunc id nunc vitae sapien imperdiet pulvinar rutrum
					non purus. Suspendisse mattis sapien quis efficitur lobortis. Donec
					risus nisi, convallis eget odio eget, imperdiet commodo nunc. Fusce
					non erat accumsan, tincidunt est at, pulvinar augue. Sed fermentum
					tincidunt dolor, eget mollis lorem sagittis non. Vestibulum pretium
					arcu a tortor ullamcorper, non elementum augue efficitur. Quisque ut
					facilisis velit, ut tincidunt libero.{' '}
				</Typography>
			</Container>
		</>
	);
}
