import React, { Component } from 'react';
import { connect } from 'react-redux'
import { latestNews, otherNews,latestGallery } from '../actions'
import { bindActionCreators } from 'redux'

//Components
import LatestNews from '../components/home/LatestNews';
import OtherNews from '../components/home/OtherNews';
import Gallerys from '../components/home/Gallerys';

class Home extends Component {

    componentDidMount() {

        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery()
    }


    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest} />
                <OtherNews otherNews = {this.props.articles.other} />
                <Gallerys latestgallery = {this.props.gallery.latestgallery}/>
            </div>
        );
    }
}

function mapStateProps(state) {
   
    return {
        articles: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({latestNews,otherNews,latestGallery}, dispatch)
}

export default connect(mapStateProps, mapDispatchtoProps)(Home);