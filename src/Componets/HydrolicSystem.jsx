import React, { Component } from 'react'
import "./Styles/HydrolicSystem.css"
import AnimationButton from './AnimationButton';

class HydrolicSystem extends Component {

    constructor(props){
        super(props);
        this.state = {psi: '0.0' ,LHV: "Open", RHV: "Open", LHF: false, RHF: false, HydPress:"Norm"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.psi});
    }

    toggleState(id){
        console.log(id)
    }

    render(){
        return(<>  
            <span>
                <h3>System PSI </h3>
                <input type="text" value={this.state.psi} onChange={this.handleChange}/>
            </span>
            <div className='grid-container-hydrolics'>
                <div id= "Buttons">
                    <p className='button' id='LV'>LHV / LFV - {this.state.LHV}</p>
                    <p className='button' id= 'LHENG'>LH ENG FIRE</p>
                    <p className='button' id= 'RHENG'>RH ENGF FIRE</p>
                    <p className='button' id= 'RV'>RHV / RFV - {this.state.RHV}</p>
                    <p className='button' id= 'HYDP'>Hyd Press Rel: {this.state.HydPress}</p>
                </div>
                <div id= "Lights">
                    <p className='button' id= 'HYD'>HYD LVL LOW</p>
                    <p className='button' id= 'LOFB'>LO Filter Bypass</p>
                    <p className='button' id= 'RFBP'>RO Filter Bypass</p>
                </div>
            </div>
        </>)
    }
}

export default HydrolicSystem;