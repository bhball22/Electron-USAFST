import React, { Component } from 'react'
import "./Styles/Slider.css";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

class SliderComponet extends Component {
  constructor(props){
    super(props);
      this.state = {
        value : 100,
        newValue : 100,
      };
    }

    changeZoom = (event, newValue) => {
        this.value = newValue;
        this.props.onSlider(newValue);
        //console.log(newValue)
    };

    componentDidMount(){
      setTimeout(() => {
        this.setState({
          value: this.newValue,
        });
      }, 500);
    }
    render(){
    return(
          <>
          <Typography id="continuous-slider" gutterBottom>
        </Typography>
        <Grid container spacing={4}>
          <Grid item>
          </Grid>
          <Grid item xs>
            <Slider
            value={this.value ?? 5} 
            onChange={this.changeZoom}
          />
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
          </>
      )
    }
}

export default SliderComponet;