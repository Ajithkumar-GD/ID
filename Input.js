import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           inputvalue:'',
        };
    this.change = this.change.bind(this);  
    }
    change(e){
         this.setState({inputvalue:e.target.value});
         this.props.callback(e.target.value);
        }
    componentWillReceiveProps(nextProps)
    {
         if(this.props.message!==nextProps.message)
         {
            if(this.state.inputvalue == nextProps.message)
            {
                   this.setState({inputvalue:''});
            }
         }
    }    
    
    render(){
        return(
            <div>
               <input type ='number'  value={this.state.inputvalue}  onChange ={this.change}/> 
            </div>
        );
    }
}
export default Input;