import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Typography, Box, Grid, Card } from '@mui/material';

const supabaseURL = 'https://jvgvyyjbukqegrisvrrd.supabase.co';
const supabaseApiKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z3Z5eWpidWtxZWdyaXN2cnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MTM2OTMsImV4cCI6MjAxMjA4OTY5M30.1Y22eOpbynuWC3CIy4z2ANovxRli7gQiMlV1AXt9BiA';
const supabase = createClient(supabaseURL, supabaseApiKey);

export default function getNotifications() {
	let data;

	getNotifications();

	async function fetchNotifications() {
		const { response } = await supabase.from('notifications').select('*');
		data = response;
	}

	return data;
}
