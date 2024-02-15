import { Component } from "react";
import Header from "../../components/Header/header";


    export default class Home extends Component{
        constructor(){
            super();
            this.state = {
                name:'Hossam',
            };
        }
render(){
    return(
        <div>
            <Header/>
            <h1>Hello World</h1>
            <h3>Hello World</h3>
            <h5>Hello World</h5>
            <h6>Hello World</h6>
            <p>Hello World</p>
        </div>
    ) 
    

}
    }