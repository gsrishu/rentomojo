import React from 'react'
import {LinkItem} from './LinkItem'


export const Header = (props) =>{      
        return (
            <nav style={{borderBottom: '0.2px solid grey', marginBottom: '2em'}} className='navbar navbar-expand-lg navbar-light nav-btm'>
                <a href='/' className='navbar-brand' style={{fontWeight: 500, alignContent: 'center', paddingTop: '15px'}}>
                    <img src="https://www.rentomojo.com/public/images/logo.svg" alt="RentoMojo"/>
                </a>
                <div className="collapse navbar-collapse" style={{display: 'flex !important'}}>
                    <ul className="navbar-nav ml-auto">
                      <li>  
                      <LinkItem path='/' name='Home' />                          
                      </li>
                    
                    </ul>
                </div>
            </nav>
        );  
        
   
    }
    