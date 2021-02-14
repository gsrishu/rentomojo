import React , {Component}from 'react';
import {Header} from './Header';
import { Link } from 'react-router-dom';
import './Post.css';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.match.params.userName,
            items: []
        }
    }

    componentDidMount(){

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}&skip=0&limit=10`)
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

        if(!isLoaded){
            return <div> Loading...</div>
         }
        else{
            
            return( 
                <div className="user">
                <Header/>
                <div className='container-fluid'>
                <div className='author'>
                        <p>{this.props.match.params.userName}</p>
                    </div>
                    <div className='col-12 col-sm-10 mx-auto'>
                        <div className='row justify-content-between'>
               {items.map(post => (  
                   <div key={post.id} className="col-md-5 col-lg-4 col-12 card-container"> 
                    <div className="card">
                    <div className="card--display" >
                    <Link to={`/post/${post.id}/${post.userId}`} style={{padding: '10px'}}>{post.title}</Link>
                    </div>
                    <div className="card--border"></div>
                    </div>
                </div>
            ))};
            </div></div></div>
             </div>
            );
        }
    }

}
export default User;
