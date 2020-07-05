import React from 'react';
import languageContext from '../context/languageContext';
class Field extends React.Component{
    static contextType = languageContext;
    render(){
        const text = this.context === 'english' ? 'Name' : 'نام' ;
        return(
            <div className = "ui field">
            <label>{text}</label>
            <input/>
            </div>
        );
    }
}

export default Field;