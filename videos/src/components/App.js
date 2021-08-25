import React from 'react';

import SearchBar from './SearchBar';  
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

class App extends React.Component {
    state = {
        videos:[],
        selectedVideo: null  
    }
    componentDidMount(){
        this.onTermSubmit('hello world')
    }

    onTermSubmit = async term =>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        const result = response.data.items;
        this.setState({
            videos: result,
            selectedVideo: result[0]
        });
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }

    render () {
        return (
            <div className='ui-container'>
            <SearchBar onTermSubmit = {this.onTermSubmit} />
            <div className='ui grid'>
              <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className='five wide column'>
                <VideoList onVideoSelect= {this.onVideoSelect} videos={this.state.videos}/>
              </div>
                </div>
            </div>
            </div>
        );
    }
}


export default App;