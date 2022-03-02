import React from 'react'
import "./Slider.css";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

const SliderComponet = () => {
    const [value,setValue] = React.useState(10);
    
    const changeZoom = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return(
        <>
        <Typography id="continuous-slider" gutterBottom>
      </Typography>
      <Grid container spacing={4}>
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider value={value} 
          onChange={changeZoom}
        />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
        </>
    )
}

export default SliderComponet;