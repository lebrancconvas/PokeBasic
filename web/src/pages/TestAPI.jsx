import React, {useState, useEffect} from "react";  
import axios from "axios"; 
import {Typography, Button, Card, CardActions, CardContent, CardMedia, Link, TextField} from "@mui/material"; 
import {Box} from "@mui/system"; 
// import Input from "../components/Input"; 


const TestAPI = () => {
	const [pokemonID, setPokemonID] = useState(1);      
	const handleChange = (e) => {
		e.preventDefault(); 
		if(e.target.value <=0 || e.target.value > 898) { 
			alert("This Pokemon isn't exist."); 
			e.target.value = 1; 
		} else if(e.target.value === "") {
			e.target.value = 0;    
		}
		setPokemonID(e.target.value); 
	}; 
	// const pokemonID = 199;         
	const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;    
	const [pokemon, setPokemon] = useState(null);  
	useEffect(() => {
		axios.get(URL)
			.then(res => {
				setPokemon(res.data);
				console.log(res.data); 
			}, []); 
	})

	if(!pokemon) return null; 

	//const pokemonAbility = (n) => pokemon.abilities[n - 1].ability.name; 
	// const pokemonType = (n) => pokemon.types[n - 1].type.name; 
	const capitalized = (str) => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
	const infoLink = `https://bulbapedia.bulbagarden.net/wiki/${capitalized(pokemon.name)}`;  

	return (
		<div>
			<Box textAlign="center">  
				<Typography variant="h3">
					Pokemon API 
				</Typography>
				<Box mt={5}>
					<Typography variant="h5">Input the pokemon's ID (between 1 - 898)</Typography> 
				</Box>
				<form>
					<Box mt={3}> 
						<TextField required label="Pokemon ID" type="number" min="1" onChange={handleChange}/>    
					</Box>
					{/* <Box mt={2}> 
						<Button variant="contained" type="submit"> 
							Submit 
						</Button>
					</Box> */}
				</form>
			</Box>
			<Box>   
				<Card sx={{maxWidth: 374}}> 
					<CardMedia component="img" height="300" alt={pokemon.name} image={pokemon.sprites.front_default} /> 
					<CardContent>
						<Typography gutterBottom variant="h5" component="div"> 
							{capitalized(pokemon.name)}     
						</Typography>
						<Typography variant="h6">
							Type 
						</Typography>
						<Typography variant="body2">
							{pokemon.types.map(type => {
								return (
								capitalized(type.type.name) + ", "    
							)})}
						</Typography>
						<br /> 
						<Typography variant="h6">
							Ability	
						</Typography>  
						<Typography variant="body2"> 
							{pokemon.abilities.map(ability => {
								return (
									capitalized(ability.ability.name) + ", "   
								)
							})} 
						</Typography> 
					</CardContent>
					<CardActions>
						<Button size="small">
							<Link href={infoLink} underline="none">Learn More</Link>  
						</Button> 
					</CardActions>
				</Card>
			</Box>
		</div>
	); 
}; 

export default TestAPI; 