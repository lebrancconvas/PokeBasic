import React from "react";  
import {Typography, TextField, Button} from "@mui/material"; 
import {Box} from "@mui/system"; 

const Input = () => {
	return (
		<div>
			<Box mt={5}>
				<Typography variant="h5">Input</Typography> 
			</Box>
			<Box mt={3}> 
				<TextField required label="Pokemon ID" type="number" />  
			</Box>
			<Box mt={2}> 
				<Button variant="contained">
					Submit 
				</Button>
			</Box>
		</div>
	)
}

export default Input; 