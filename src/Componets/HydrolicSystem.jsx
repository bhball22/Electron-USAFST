import React, { Component } from 'react'
import "./Styles/HydrolicSystem.css"
import AnimationButton from './AnimationButton'
import MAP from "../Assets/MAP.json";
import { ListItem, StepContext } from '@mui/material';


class HydrolicSystem extends Component {

    constructor(props){
        super(props);
        //Simulation Variables / Default values
        this.state = {psi: 1500 , PsiColor: 'green',LHV: "Open", RHV: "Open", LHF: false, RHF: false, HYD: false, HydPress:"Norm", PRV:"Working", LeftEngine:"Functioning", RightEngine:"Functioning", LeftFilter:"Flowing", RightFilter:"Flowing", TopFilter:"Flowing"};
        this.handleChange = this.handleChange.bind(this);
        this.updateSimVariables = this.updateSimVariables.bind(this);
    }

    async updateSimVariables(event){

        //console.log(event.target.id); //Uncomment this line to see what the json on the event is (tells ya what button pressed)

        event.preventDefault();

        if(event.target.id === 'LV'){ //ID: LV and LVENG both open and close the left valve.
           await this.setState({ LHV: this.state.LHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'RV'){ //ID: RV and RVENG both open and close the right valve.
           await this.setState({ RHV:this.state.RHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'LHENG'){
           await this.setState({ LHF:this.state.LHF === false ? true : false});
          if((this.state.LHV === "Open" && this.state.LHF === true) || (this.state.LHV === "Closed" && this.state.LHF === false)){
            await this.setState({ LHV:this.state.LHV === "Open" ? "Closed" : "Open"});
          }
        }
        if(event.target.id === 'RHENG'){
          await  this.setState({ RHF:this.state.RHF === false ? true : false});
          if((this.state.RHV === "Open" && this.state.RHF === true) || (this.state.RHV === "Closed" && this.state.RHF === false)){
            await this.setState({ RHV:this.state.RHV === "Open" ? "Closed" : "Open"});
          }
        }
        if(event.target.id === 'HYDP'){ // This opens the vavle at the bottom left release
          await  this.setState({ HydPress: this.state.HydPress === "Norm" ? "Rel" : "Norm"});
        }
        if(event.target.id === 'HYD'){
            await this.setState({ HYD: this.state.HYD === false ? true : false});
        }
        if(event.target.id === 'LEF'){
            await this.setState({ LeftEngine: this.state.LeftEngine === "Functioning" ? "Failed" : "Functioning"});
        }
        if(event.target.id === 'REF'){
            await this.setState({ RightEngine: this.state.RightEngine === "Functioning" ? "Failed" : "Functioning"});
        }
        if(event.target.id === 'PRV'){
            await this.setState({ PRV: this.state.PRV === "Working" ? "Failed" : "Working"});
        }
        if(event.target.id === 'LF'){
            await this.setState({ LeftFilter: this.state.LeftFilter === "Flowing" ? "Clogged" : "Flowing" });
        }
        if(event.target.id === 'RF'){
            await this.setState({ RightFilter: this.state.RightFilter === "Flowing" ? "Clogged" : "Flowing" });
        }
        if(event.target.id === 'TF'){
            await this.setState({ TopFilter: this.state.TopFilter === "Flowing" ? "Clogged" : "Flowing" });
        }
        if(event.target.id === 'PSI' || event.target.id === 'HYD'){
            await this.setState({ psi: this.state.psi });
            if(this.state.psi < 400 || this.state.HYD === true){
                this.setState({ PsiColor: this.state.PsiColor = 'Yellow' });
            }else if ((this.state.psi >= 400) && (this.state.psi <= 600)){
                this.setState({ PsiColor: this.state.PsiColor = '#DBFF00'});
            }else if ((this.state.psi > 600) && (this.state.psi <= 800)){
                this.setState({ PsiColor: this.state.PsiColor = '#B6FF00'});
            }else if ((this.state.psi > 800) && (this.state.psi <= 1000)){
                this.setState({ PsiColor: this.state.PsiColor = '#92FF00'});
            }else if ((this.state.psi > 1000) && (this.state.psi < 1200)){
                this.setState({ PsiColor: this.state.PsiColor = '#6DFF00'});
            }else if((this.state.psi >= 1200) && (this.state.psi <= 1550)){
                this.setState({ PsiColor: this.state.PsiColor = 'Green' });
            }else if ((this.state.psi > 1550) && (this.state.psi <= 1650)){
                this.setState({ PsiColor: this.state.PsiColor = '#55AA00'});
            }else if ((this.state.psi > 1650) && (this.state.psi <= 1750)){
                this.setState({ PsiColor: this.state.PsiColor = '#808000'});
            }else if ((this.state.psi > 1750) && (this.state.psi <= 1850)){
                this.setState({ PsiColor: this.state.PsiColor = '#AA5500'});
            }else if(this.state.psi > 1850){
                this.setState({ PsiColor: this.state.PsiColor = 'Red' });
            }
        }
        //console.log(this.state); //Uncomment this Line to See the JSON of the state

        //Calculate Lights
            //Pressure Sensors in the center if each is less than 750 PSI they light up.
            //HYD LEVEL LO lights up after less than or equal to 0.6 gallons remaining.

        //Filter
            //All filters can be bypassed by being clogged (accidental so selected)
            //Wil - Im yet to figure out how to exactly do this inside of this componet ;/
        
        //Pumps
            //Only run if the engine is running or the blades are spinning


        this.updateSimSVG();
        this.updateSimCss();

    }

    updateSimSVG(){ //The Id's Here are temp
        let LHV = document.getElementById("path520918");
        let PL = document.getElementById("path520918-0-5");
        let PVPL = document.getElementById("Pump-Valve-Pipe-Left");
        let PSFL = document.getElementById("PumpSensorFilterLeft");
        let PFL = document.getElementById("PostFilterLeft");
        let RHV = document.getElementById("path520918-6");
        let PR = document.getElementById("path520918-0-5-9");
        let PVPR = document.getElementById("Pump-Valve-Pipe-Right");
        let PSFR = document.getElementById("PumpSensorFilterRight");
        let PFR = document.getElementById("PostFilterRight");
        let OilO = document.getElementById("OilOut");
        let ORM = document.getElementById("OilReturnMain");
        let SB = document.getElementById("SystemBleed");
        let BLF = document.getElementById("FilterBypassLeft");
        let BRF = document.getElementById("FilterBypassRight");
        let BTF = document.getElementById("FilterBypassTop");
        
        document.getElementById("OilReservoir").style.fill = this.state.PsiColor;
        
        if(this.state.LHV === "Closed" || this.state.LHF === true){
            LHV.style.fill = "#565656";
            LHV.style.transform = "rotate(90deg) translate(610px,180px)";
            PVPL.style.fill = "#565656";
            PSFL.style.fill = "#565656";
            PFL.style.fill = "#565656";
            PL.style.fill = "#6f6f91";
            BLF.style.fill = '#565656';
            //console.log(MAP.map["R O FLTR BYPASS R H PMP PRESS L O"].preFillColor);
        }else if(this.state.LeftEngine === "Failed"){
            LHV.style.fill = 'yellow';
            PVPL.style.fill = 'yellow';
            PSFL.style.fill = 'yellow';
            PFL.style.fill = 'yellow';
            PL.style.fill = 'yellow';
            if(this.state.LeftFilter === "Clogged"){
                BLF.style.fill = 'yellow';
            }else if(this.state.LeftFilter === "Flowing"){
                BLF.style.fill = '#565656';
            }           
        }else{
            LHV.style.fill = this.state.PsiColor;
            LHV.style.transform = "rotate(0deg)";
            PVPL.style.fill = this.state.PsiColor;
            PSFL.style.fill = this.state.PsiColor;
            PFL.style.fill = this.state.PsiColor;
            PL.style.fill = this.state.PsiColor;
            if(this.state.LeftFilter === "Clogged"){
                BLF.style.fill = this.state.PsiColor;
            }else if(this.state.LeftFilter === "Flowing"){
                BLF.style.fill = '#565656';
            } 
        }

        if(this.state.RHV === "Closed" || this.state.RHF === true){
            RHV.style.fill = "#565656";
            RHV.style.transform = "rotate(90deg) translate(610px,180px)";
            PVPR.style.fill = "#565656";
            PSFR.style.fill = "#565656";
            PFR.style.fill = "#565656";
            PR.style.fill = "#6f6f91";
            BRF.style.fill = '#565656';
        }else if(this.state.RightEngine === "Failed"){
            RHV.style.fill = 'yellow';
            PVPR.style.fill = 'yellow';
            PSFR.style.fill = 'yellow';
            PFR.style.fill = 'yellow';
            PR.style.fill = 'yellow';
            if(this.state.RightFilter === "Clogged"){
                BRF.style.fill = 'yellow';
            }else if(this.state.RightFilter === "Flowing"){
                BRF.style.fill = '#565656';
            }  
        }else{
            RHV.style.fill = this.state.PsiColor;
            RHV.style.transform = "rotate(0deg)";
            PVPR.style.fill = this.state.PsiColor;
            PSFR.style.fill = this.state.PsiColor;
            PFR.style.fill = this.state.PsiColor;
            PR.style.fill = this.state.PsiColor;
            if(this.state.RightFilter === "Clogged"){
                BRF.style.fill = this.state.PsiColor;
            } else if(this.state.RightFilter === "Flowing"){
                BRF.style.fill = '#565656';
            } 
        }

        if((this.state.LHV === "Closed" || this.state.LHF === true) && (this.state.RHV === "Closed" || this.state.RHF === true)){
            OilO.style.fill = "#565656";
        }else if((this.state.LeftEngine === "Failed") && (this.state.RightEngine === "Failed")){
            OilO.style.fill = "Yellow";
        }else{
            OilO.style.fill = this.state.PsiColor;
        }

        if(((this.state.HydPress === "Rel") && ((this.state.LHV === "Open" && this.state.LHF === false) || (this.state.RHV ==="Open" && this.state.RHF === false))) || ((this.state.PRV ==="Working" && this.state.psi > 1650) && ((this.state.LHV === "Open" && this.state.LHF === false) || (this.state.RHV ==="Open" && this.state.RHF === false)))){
            ORM.style.fill = this.state.PsiColor;
            SB.style.fill = this.state.PsiColor;
            if(this.state.TopFilter === "Clogged"){
                BTF.style.fill = this.state.PsiColor;
            }else if(this.state.TopFilter === "Flowing"){
                BTF.style.fill = '#565656';
            } 
        }else{
            ORM.style.fill = "#565656";
            SB.style.fill = "#565656";
            BTF.style.fill = "#565656";
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

        let LEF = document.getElementById("LEF");
        let REF = document.getElementById("REF");

        if(this.state.LeftEngine === "Failed"){
            LEF.style.backgroundColor = 'RED';
        }else{
            LEF.style.backgroundColor = '#1c2224';
        }
        
        if(this.state.RightEngine === "Failed"){
            REF.style.backgroundColor = 'RED';
        }else{
            REF.style.backgroundColor = '#1c2224';
        }

        let HYDL = document.getElementById("HYDL");
        let HYD = document.getElementById("HYD");
        let LOFB = document.getElementById("LOFB");
        let RFBP = document.getElementById("RFBP");

        if(this.state.HYD === true){
            HYDL.style.color = 'Yellow'
            HYD.style.color = 'Red'
        }else{
            HYDL.style.color = '#1c2224'
            HYD.style.color = 'White'
        }

        if((this.state.psi < 750) || (this.state.LeftEngine === "Failed") || (this.state.LHV === "Closed") || (this.state.LHF)){
            LOFB.style.color = 'Yellow'
        }else{
            LOFB.style.color = '#1c2224'
        }
        
        if((this.state.psi < 750) || (this.state.RightEngine === "Failed") || (this.state.RHV === "Closed") || (this.state.RHF)){
            RFBP.style.color = 'Yellow'
        }else{
            RFBP.style.color = '#1c2224'
        }
    }

    //This handles psi Chage if changed by user broken but need atm

    handleChange(event){
        this.setState({ psi: event.target.value });
    }

    render(){
        return(<>  
            <span>
                <h3 id='psiTag' style={{color: this.state.PsiColor}}>System PSI: {this.state.psi}</h3>
                <form onSubmit={this.updateSimVariables} id='PSI'>
                    <input type="number" value={this.state.psi} onChange={this.handleChange} /> 
                </form>
            </span>
            <div className='grid-container-hydrolics'>
                <div id= "Buttons">
                    <button className='sim-button' onClick={this.updateSimVariables} id='LV'>LHV / LFV - {this.state.LHV}</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'LHENG'>LH ENG FIRE</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'RHENG'>RH ENG FIRE</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'RV'>RHV / RFV - {this.state.RHV}</button>
                    <button className='sim-button' onClick={this.updateSimVariables} id= 'HYDP'>Hyd Press Rel: {this.state.HydPress}</button>
                </div>
                <div id= "Failure-Buttons">
                    <button className='sim-button-failure' onClick={this.updateSimVariables} id= 'LEF'>Left Engine: {this.state.LeftEngine}</button>
                    <button className='sim-button-failure' onClick={this.updateSimVariables} id= 'REF'>Right Engine: {this.state.RightEngine}</button>
                    <button className='sim-button-failure' onClick={this.updateSimVariables} id= 'PRV'>Pressure Relief Valve: {this.state.PRV}</button>
                    <button className='sim-button-failure' onClick={this.updateSimVariables} id= 'HYD'>Hydraulic Leak?</button>
                </div>
                <div id= "Lights">
                    <p className='sim-light' id= 'HYDL'>HYD<br/>LVL LOW<br/>RUD<br/>BST FAIL</p>
                    <p className='sim-light' id= 'LOFB'>LO FLTR<br/>BYPASS<br/>LH PMP<br/>PRESS LO</p>
                    <p className='sim-light' id= 'RFBP'>RO FLTR<br/>BYPASS<br/>RH PMP<br/>PRESS LO</p>
                </div>
            </div>
            <div id= "Filters">
                <button className='sim-button-filter' onClick={this.updateSimVariables} id='LF'>Left Filter: {this.state.LeftFilter}</button>
                <button className='sim-button-filter' onClick={this.updateSimVariables} id='RF'>Right Filter: {this.state.RightFilter}</button>
                <button className='sim-button-filter' onClick={this.updateSimVariables} id='TF'>Return Filter: {this.state.TopFilter}</button>
            </div>
        </>)
    }
}

export default HydrolicSystem;