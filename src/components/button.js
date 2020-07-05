import React from 'react';
import languageContext from '../context/languageContext';
import colorContext from '../context/colorContext';

class Button extends React.Component{
     // by using this.context
    //static contextType = languageContext;
        //or
       // Button.contextType=languageContext  //alternative way
       
    render(){
       // const text = this.context === 'english' ? 'submit' : 'جمع کرائیں' ;
        return(
        <colorContext.Consumer>
        {(color)=>
            <button className= {`ui button ${color}`}>
            <languageContext.Consumer>
               {(value)=>value === 'english'? 'submit' : 'جمع کرائیں'}
            </languageContext.Consumer>
            </button>
        }
            
        </colorContext.Consumer>
        );
    };
}

export default Button;