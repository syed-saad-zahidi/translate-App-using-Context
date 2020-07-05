import React from 'react';
import UserCreate from './userCreate';
import languageContext from '../context/languageContext';
import colorContext from '../context/colorContext';

class App extends React.Component{
    state = { language: 'english'};

    onLanguageChange = language =>{
        this.setState({language});
    };
  
    
    render(){
        return<div className="ui container">
            <div>
                select a language
                <i className="flag us" 
                onClick={ () => this.onLanguageChange('english')} />
                <i className="flag pk" onClick={()=>this.onLanguageChange('urdu')}/>
               
            </div>
            <colorContext.Provider value="red">
            <languageContext.Provider value={this.state.language}>
        <UserCreate/>
        </languageContext.Provider>
       </colorContext.Provider>
        </div>
    }
}

export default App;