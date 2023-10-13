import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Typography, getSnackbarContentUtilityClass } from '@mui/material';

const supabaseUrl = 'https://jvgvyyjbukqegrisvrrd.supabase.co';
const supabaseKey = process.env.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey);

function DatabaseConnectionCheck() {
	const [errorMsg, setErrorMsg] = useState();
	useEffect(() => {
		checkDB();
	}, []);
	async function checkDB() {
		let { data: latest_news, error } = await supabase
			.from('latest_news')
			.select('*');
		setErrorMsg(`Error: ${error ? error.message : 'none'}`);
		console.log(`Error: ${error ? error.message : 'none'}`);
	}
	return (
		<>
			<Typography variant='h5' color='#ffffff'>
				{errorMsg === null ? 'none' : errorMsg}
			</Typography>
		</>
	);
}

export default DatabaseConnectionCheck;
