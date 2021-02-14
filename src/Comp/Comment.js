import React, {Component} from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBuilding} from '@fortawesome/free-solid-svg-icons'

class Comment extends Component{

    constructor(props){
        super(props);
        this.state = {
    
            items:[],
            isLoaded:false,
        }

    }

    componentDidMount(){

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.postId}`)
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
           <div>
               <div className="container">
            <div className="row">
            <div className="col-md-1">
                </div>
                <div className="col-md-10"style={{padding: '10px'}}>
                  <div className="page-header">
                    {/* <h1><small className="pull-right">45 comments</small> Comments </h1> */}
                  </div> 

                  {items.map(item => (   
                    // <ul className='comment-section' key={item.id}>
                    // <li>{item.name}</li>
                    // <li>{item.email}</li>
                    // <li>{item.body}</li>
                    // </ul>
                       <div className="comments-list" key={item.id} style={{padding: '20px'}}>
                       <div className="media">
                            <a className="media-left" style={{padding: '20px'}}>
                            <FontAwesomeIcon icon={faUser}/>
                            </a>
                            <div className="media-body">
                                
                              <h4 className="media-heading user_name">{item.name} <span style={{float: 'right'}}>{item.email}</span></h4>
                              {item.body}
                            </div>
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

export default Comment;