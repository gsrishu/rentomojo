import React, {Component} from 'react'
import './Home.css';
import {Header} from './Header';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBuilding} from '@fortawesome/free-solid-svg-icons'
import logo from '../image/1.jpg';

/*/*/
class Home extends Component{

   constructor(props){

    super(props);

    this.state = {

        items:[],
        isLoaded:false,
        color: ''
    }
   }

   componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(json  =>{

        this.setState({

            isLoaded: true,
            items: json,
        })
     })
   }
    render(){

        var {isLoaded, items} = this.state;
        var c;

        if(!isLoaded){
            return <div> Loading...</div>
         }
        else{
            // const logo = require('../image/1.jpg');
        return(
            
            <div className="Home">
                <Header/>
                <div className='container-fluid'>
                    <div className='col-12 col-sm-10 mx-auto'>
                        <div className='row justify-content-between'>
                   {items.map(item => (       
                   <div key={item.id} className="col-md-5 col-lg-4 col-12 card-container">
                <div className="card">
                    <Link to={`/user/${item.id}/${item.name}`}>
                        <div className="card--display">
                        {/* {color = randomColor()} */}
                        {/* <div className="cardBackground" style={{backgroundColor:'#da979e'}}  /> */}
                        <img src={logo}  className="cardBackground"/>
                        <div className="userStyle">
                        <FontAwesomeIcon icon={faUser}/> <h6 style={{ paddingBottom: '10px',display: 'inline',paddingLeft: '10px' }}>{item.name}</h6><br/>
                        <FontAwesomeIcon icon={faBuilding} /><h6 style={{ paddingBottom: '10px',display: 'inline',paddingLeft: '10px' }}>{item.company.name}</h6>
                        </div>
                        </div>
                    </Link>
                    <div className="card--border"></div>
                </div>
                </div>
                ))};
                </div>
                </div>
                </div>
            </div>

        );

    

        }
    }
}

export default Home;