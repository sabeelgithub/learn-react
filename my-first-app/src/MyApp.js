import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/footer';
import Homepage from './pages/Homepage';
import Dummypage from './pages/dummypage';
import Usage from './pages/usage';
import Settings from './pages/settings';
import NewCounter from './pages/NewCounter';
import { Provider } from 'react-redux';
import  store from './Redux/store';

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
                return <Settings key="settings" name='Settings'/>
            case 'logout':
                return <Dummypage key="logout" name='Logout'/>
            case 'counter':
                    return <NewCounter/>
            default:
                break

        }
    }

    render() {
       return (
        <Provider store={store}>
           <div className='app'>
                <Header onMenuSelect={this.handleMenuSelect}/>
                <div className='app-body'>
                 {this.getPage()}
                </div>
                <Footer/>
           </div>
        </Provider>

        )
    }
}

export default MyApp
