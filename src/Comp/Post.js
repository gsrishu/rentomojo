import React, {Component} from 'react'
import {Header} from './Header';
import Comments from './Comment'
import {DeletePost} from './DeletePost'
class Post extends Component{

    constructor(props){

        super(props);
    
        this.state = {
    
            items:[],
            isLoaded:false,
            showComment:false,
            postId:this.props.match.params.postId,
            userId:this.props.match.params.userId
        }
       }
       componentDidMount(){

        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
         .then(res => res.json())
         .then(json  =>{
    
            this.setState({
    
                isLoaded: true,
                items: json,
            })
         })
       }
       showComment = (e) => {
        this.setState(prevState => ({
            showComment: !prevState.showComment
        }))
    }
    
    deletePost = () => {
        DeletePost(this.state.postId, this.state.userId)
    }

    render(){

        var title,detail;

        title = this.state.items.title;
        detail = this.state.items.body;
        // this.state.items.map(item => {
        //     title = item.title
        //     detail = item.body

        // });
        const commentInfo = this.state.showComment ? 'Hide Comments' : 'Show Comments';
        return(
            
            <div>
                
            <Header />
            <div className='container-fluid'>
                <div>
                <div className='header'>
                    <h4 style={{display: 'inline'}}>Title: </h4><h5 className='title' style={{display: 'inline'}}>{title}</h5>
                    <button onClick={this.deletePost} className='btn btn-outline-danger btn-sm btn-delete' style={{float: 'right'}}><i className="fa fa-trash my-auto" aria-hidden="true"></i>Delete</button>
                </div>
                <div className='content'style={{paddingTop: '10px'}}><h4>Content: </h4><h6>{detail}</h6></div>
                </div>
                <div className='comments' style={{padding: '10px'}}>
                    <h6 style={{display: 'inline'}}>Comments:</h6>
                    <button onClick={this.showComment} className='btn btn-outline-primary btn-sm'style={{float: 'right'}}>{commentInfo}</button>
                </div>
                {this.state.showComment?<Comments postId={this.state.postId} />:null}
            </div>
        </div>
        );
    }
}

export default Post