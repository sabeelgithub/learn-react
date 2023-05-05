import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/footer';
import Homepage from './pages/Homepage';
import Dummypage from './pages/dummypage';
import Usage from './pages/usage';

class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSelected:'home'
        }
    }
 
    handleMenuSelect = (value)=> {
        console.log(value)
        this.setState({
            currentSelected:value
        })
      }
    getPage() {
        const {
            currentSelected
        } = this.state

        switch (currentSelected) {
            case 'home':
                return <Homepage/>
            case 'usage':
                return <Usage key="usage"  name='Usage'/>
            case 'settings':
                return <Dummypage key="settings" name='Settings'/>
            case 'logout':
                return <Dummypage key="logout" name='Logout'/>
            default:
                break

        }
    }

    render() {
       return (
           <div className='app'>
                <Header onMenuSelect={this.handleMenuSelect}/>
                <div className='app-body'>
                 {this.getPage()}
                </div>
                <Footer/>
           </div>
        )
    }
}

export default MyApp
