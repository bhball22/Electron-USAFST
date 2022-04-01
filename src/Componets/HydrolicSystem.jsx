import React, { Component } from 'react'
import "./Styles/HydrolicSystem.css"
import AnimationButton from './AnimationButton';


class HydrolicSystem extends Component {

    constructor(props){
        super(props);
        //Simulation Variables / Default values
        this.state = {psi: 1860 , PsiColor: 'green',LHV: "Open", RHV: "Open", LHF: false, RHF: false, HydPress:"Norm"};
        this.handleChange = this.handleChange.bind(this);
        this.updateSimVariables = this.updateSimVariables.bind(this);
    }


    async updateSimVariables(event){
        
        //console.log(event.target.id); //Uncomment this line to see what the json on the event is (tells ya what button pressed)

        if(event.target.id === 'LV'){ //ID: LV and LVENG both open and close the left valve.
           await this.setState({ LHV: this.state.LHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'RV'){ //ID: RV and RVENG both open and close the right valve.
           await this.setState({ RHV:this.state.RHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'LHENG'){
           await this.setState({ LHF:this.state.LHF === false ? true : false});
           await this.setState({ LHV: this.state.LHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'RHENG'){
          await  this.setState({ RHF:this.state.RHF === false ? true : false});
          await this.setState({ RHV:this.state.RHV === "Open" ? "Closed" : "Open"});
        }
        if(event.target.id === 'HYDP'){ // This opens the vavle at the bottom left release
          await  this.setState({ HydPress: this.state.HydPress === "Norm" ? "Rel" : "Norm"});
        }
        console.log(this.state); //Uncomment this Line to See the JSON of the state
        //Caculate PSI
            //Pressure Relief Valve opens automatically if greater than 1650 PSI.
            
          

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
        let PVPL = document.getElementById("Pump-Valve-Pipe-Left");
        let PSFL = document.getElementById("PumpSensorFilterLeft");
        let PFL = document.getElementById("PostFilterLeft");
        let RHV = document.getElementById("path520918-6");
        let PVPR = document.getElementById("Pump-Valve-Pipe-Right");
        let PSFR = document.getElementById("PumpSensorFilterRight");
        let PFR = document.getElementById("PostFilterRight");
        let OilO = document.getElementById("OilOut");
        let ORM = document.getElementById("OilReturnMain");
        let SB = document.getElementById("SystemBleed");
        

        if(this.state.LHV === "Closed"){
            LHV.style.fill = "#565656";
            LHV.style.transform = "rotate(90deg) translate(610px,180px)";
            PVPL.style.fill = "#565656";
            PSFL.style.fill = "#565656";
            PFL.style.fill = "#565656";
        }else{
            LHV.style.fill = this.state.PsiColor;
            LHV.style.transform = "rotate(0deg)";
            PVPL.style.fill = this.state.PsiColor;
            PSFL.style.fill = this.state.PsiColor;
            PFL.style.fill = this.state.PsiColor;
        }

        if(this.state.RHV === "Closed"){
            RHV.style.fill = "#565656";
            RHV.style.transform = "rotate(90deg) translate(610px,180px)";
            PVPR.style.fill = "#565656";
            PSFR.style.fill = "#565656";
            PFR.style.fill = "#565656";
        }else{
            RHV.style.fill = this.state.PsiColor;
            RHV.style.transform = "rotate(0deg)";
            PVPR.style.fill = this.state.PsiColor;
            PSFR.style.fill = this.state.PsiColor;
            PFR.style.fill = this.state.PsiColor;
        }

        if(this.state.LHV === "Closed" && this.state.RHV === "Closed"){
            OilO.style.fill = "#565656";
        }else{
            OilO.style.fill = this.state.PsiColor;
        }

        if((this.state.HydPress === "Rel") && (this.state.LHV === "Open" || this.state.RHV ==="Open")){
            ORM.style.fill = this.state.PsiColor;
            SB.style.fill = this.state.PsiColor;
        }else{
            ORM.style.fill = "#565656";
            SB.style.fill = "#565656";
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
           
        
        //400 PSI Bright yellow (not working)
        //1200 PSI - 1550 PSI Green (good window)
        //greater than 1550 PSI gets Red until 1850 PSI which is solid Red

        //Calculate current PSI Example
        let curPsi = this.state.psi;
        curPsi = 10;

        this.setState({psi: curPsi});

        if(this.state.psi < 400){
            document.getElementById('psiTag').style.color = 'Yellow';
        }else if((this.state.psi >= 1200) && (this.state.psi <= 1550)){
            document.getElementById('psiTag').style.color = 'Green';
        }else if(this.state.psi > 1850){
            document.getElementById('psiTag').style.color = 'Red';
        }
        
    }

    //This handles psi Chage if changed by user broken but need atm
    handleChange(event) {
       this.setState({psi: event.target.psi});
       this.updateSimVariables();
    }

    render(){
        return(<>  
            <span>
                <h3 id='psiTag'>System PSI </h3>
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