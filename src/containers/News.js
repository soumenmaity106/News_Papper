import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedNews, cleareSeletedNews } from '../actions'
import { bindActionCreators } from 'redux'

// Counter
import Counter from './LikesCounter'

class News extends Component {

componentDidMount(){
    this.props.selectedNews(this.props.match.params.id);
}
componentWillUnmount(){
    this.props.cleareSeletedNews();
}

renderNews = ({selected}) =>{
    if(selected){
        return selected.map((item)=>{
            return (
                <div key={item.id}>
                  <div className="tags">
                    <span>
                        <i className="fa fa-eye"></i>
                        {item.views}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-up"></i>
                        {item.likes[0]}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-down"></i>
                        {item.likes[1]}
                    </span>
                  </div>
                  <div className="top">
                    <h2>{item.title}</h2>
                    <span>Article by: <strong>{item.author}</strong></span>
                  </div>
                  <img src={`/images/articles/${item.img}`} alt={item.title} />
                  <div className="body_news">
                    {item.body}
                  </div>
                  <div>
                    <Counter
                    articlesId={item.id}
                    type="HANDEL_LIKES_ARTICALES"
                    section="articles"
                    likes={item.likes[0]}
                    dislikes={item.likes[1]}
                    />  
                  </div>
                </div>
            )
        })
    }
}
    render() {
       
        return (
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        );
    }
}

function mapStateToProps(state){
        console.log(state)
        return {
            articles:state.articles
        }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({selectedNews, cleareSeletedNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (News);