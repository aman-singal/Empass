import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));



function QuizHelper({data}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [index,setIndex] = useState(0)

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const [checked,setChecked] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if(value === ''){
        setError(true)
        setHelperText("You need to select an option")
    }

    else if(value === data[index].answer){
        setError(false)
        setHelperText('Correct Answer');
        setChecked(true)
    }

    else{
        setError(true)
        setHelperText("Wrong Answer")
        setChecked(true)
    }
    

  };


  const handleNext = (e) =>{
      e.preventDefault()
      if(data.length > index + 1){
          setIndex(prevIndex =>(
              prevIndex + 1
          ))
          
      }else{
          setIndex(0)
      }
      setChecked(false)
      setError(false)
      setHelperText('Choose wisely')
      setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">{data[index].question}</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
           
           <div style={{marginTop: '50px' , marginBottom: '50px'}}>
           {data[index].options.map(item =>(
               <div style={{justifyContent: 'left' , alignItems: 'left' , display: 'flex' , textAlign: 'left'}}>
                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
               </div>
            ))}
           </div>
           
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>

        {checked ? <Button type="submit" onClick={e => {handleNext(e)}} variant="outlined" color="primary" className={classes.button}>
          {data.length > index + 1 ? "Next Question": "Finish and Start Over" }
        </Button>:
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
        Check Answer
      </Button>}
        
      </FormControl>
    </form>
  );
}

export default QuizHelper
