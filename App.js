import React from 'react';
import Input from './Input';
class App extends React.Component{
       constructor(props){
           super(props);
    this.state ={
          responsedata : [],
          inputvalue :'',
          disappear:'',
    };
     this.inputcall = this.inputcall.bind(this);
     this.disappear=this.disappear.bind(this);
    }
    inputcall(input){
        this.setState({inputvalue: input });
    }
    disappear()
    {
        this.setState({disappear: this.state.inputvalue});
        this.setState({inputvalue:''});
    }
    componentDidMount()
    {
        fetch("http://localhost:8079").then((response)=>{return response.json()}).then((data)=> {this.setState({responsedata:data})});
    }
      render(){
          return(
           <div>
                Enter your Employee ID
                <Input  callback={(input)=> this.inputcall(input)}  message={this.state.disappear}/>
               <button onClick={this.disappear}>Search</button>
               {this.state.responsedata.anObject&&this.state.responsedata.anObject.map((item)=>{
                         if(item.AssociateNo==this.state.disappear){
                         return(<div><p>AssociateNo : {item.AssociateNo}</p><p>Idcardno : {item.Idcardno}</p><p>Name : {item.Name}</p></div>);
                           }
                        }
                    )
                }
          </div>
             );
          }
       }
export default App;