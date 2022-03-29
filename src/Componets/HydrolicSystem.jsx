import React, { Component } from 'react'
import "./Styles/HydrolicSystem.css"
import AnimationButton from './AnimationButton';



class HydrolicSystem extends Component {

    constructor(props){
        super(props);
        //Simulation Variables / Default values
        this.state = {psi: '1500' ,LHV: "Open", RHV: "Open", LHF: false, RHF: false, HydPress:"Norm"};
        this.handleChange = this.handleChange.bind(this);
        this.updateSimVariables = this.updateSimVariables.bind(this);
    }


    async updateSimVariables(event){
        //console.log(this.state); //Uncomment this Line to See the JSON of the state
        //console.log(event.target.id); //Uncomment this line to see what the json on the event is (tells ya what button pressed)

        if(event.target.id === 'LV'){
           await this.setState({ LHV: this.state.LHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'RV'){
           await this.setState({ RHV:this.state.RHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'LHENG'){
           await this.setState({ LHF:this.state.LHF === false ? true : false});
        }
        if(event.target.id === 'RHENG'){
          await  this.setState({ RHF:this.state.RHF === false ? true : false});
        }
        if(event.target.id === 'HYDP'){
          await  this.setState({ HydPress: this.state.HydPress === "Norm" ? "Rel" : "Norm"});
        }

        //Caculate PSI


        //Calculate Lights


        this.updateSimSVG();
        this.updateSimCss();

    }

    updateSimSVG(){
        let LHV = document.getElementById("LHVValve");
        let RHV = document.getElementById("RHVValve");

        if(this.state.LHF || this.state.LHV === "Closed"){
            LHV.style.fill = "red";
        }else{
            LHV.style.fill = "yellow";
        }

        if(this.state.RHF || this.state.RHV === "Closed"){
            RHV.style.fill = "red";
        }else{
            RHV.style.fill = "yellow";
        }
    }

    updateSimCss() {
        let LV = document.getElementById("LV");

        if(this.state.LHV === "Closed"){
            LV.style.backgroundColor = "yellow";
        }else{
            LV.style.backgroundColor = "white";
        }

        let LHENG = document.getElementById("LHENG");

        if(this.state.LHF){
            LHENG.style.backgroundColor = "rgb(255, 0, 0)";
        }else{
            LHENG.style.backgroundColor = "rgb(49, 0, 0)";
        }

        let RV = document.getElementById("RV");

        if(this.state.RHV === "Closed"){
            RV.style.backgroundColor = "yellow";
        }else{
            RV.style.backgroundColor = "white";
        }

        let RHENG = document.getElementById("RHENG");

        if(this.state.RHF){
            RHENG.style.backgroundColor = "rgb(255, 0, 0)";
        }else{
            RHENG.style.backgroundColor = "rgb(49, 0, 0)";
        }
    }

    handleChange(event) {
        this.setState({value: event.target.psi});
    }

    render(){
        return(<>  
            <span>
                <h3>System PSI </h3>
                <input type="text" id="psi" value={this.state.psi} onChange={this.handleChange}/>
            </span>
            <div className='grid-container-hydrolics'>
                <div id= "Buttons">
                    <button className='sim-button' onClick={this.updateSimVariables} id='LV'>LHV / LFV - {this.state.LHV}</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'LHENG'>LH ENG FIRE</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'RHENG'>RH ENGF FIRE</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'RV'>RHV / RFV - {this.state.RHV}</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'HYDP'>Hyd Press Rel: {this.state.HydPress}</button>
                </div>
                <div id= "Lights">
                    <p className='sim-light' id= 'HYD'>HYD LVL LOW</p>
                    <p className='sim-light' id= 'LOFB'>LO Filter Bypass</p>
                    <p className='sim-light' id= 'RFBP'>RO Filter Bypass</p>
                </div>
            </div>
        </>)
    }
}

export default HydrolicSystem;