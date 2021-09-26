import React, {useState} from 'react';
import { makeStyles} from '@mui/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Guessing () {

    const useStyles = makeStyles((theme) => ({
        title: {     
          color: 'black'
        },
        root: {          
          textAlign:'center',
          marginTop: 100,
        },  
        container: {
            margin: 100,   
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',                  
        },  
        text: {
            textAlign: 'center',
        },
        red: {
            color: 'red'
        },
        green: {
            color: 'green',
        }              
    }))

    const classes = useStyles();

    const [number, setNumber] = useState('');  
    const [text, setText] = useState(''); 
    const [color, setColor] = useState(false); 

    const guess = (e) => {
        let guessNumber = e.target.value;
        setNumber(guessNumber);        
    }

    const guessNumber = () => {
        let randomNumber = Math.floor(Math.random() * 10 + 1);        
        if (randomNumber == number) {  
            setText("Bazinga");  
            setColor(true);                
        } else {
            setText("Fuuuuccckkk!!!") 
            setColor(false);            
        }
    }    
    
    return (

        <div className={classes.root}>
            <Typography className={classes.title} variant='h3'>Guessing game</Typography>

            <div className={classes.container}>                
                <TextField id="standard-basic" label="Choose a number" variant="standard" onChange={guess}/>
                <Button variant="contained" onClick={guessNumber}>Start</Button>                                                
            </div>

            <div className={classes.text}>
                <Typography variant="h3" className={color ? classes.green : classes.red}>{text}</Typography>
            </div>
            
        </div>
        
    )
}

export default Guessing; 