import './App.css';

import { Component } from 'react';

import { loadPost } from './utils/load-post';
import { Posts } from './components/Posts';


class App extends Component {
  state = {
    posts: []
  }
  

  async componentDidMount() {
   await this.loadPost()
  }

  loadPost = async () => {
    
    const postsAndPhotos = await loadPost()
    this.setState({posts: postsAndPhotos})
  }

  render() {
    const { posts } = this.state;

    return(
      <section className='container'>
        <Posts 
          posts={posts}
        />
      </section>
      
    );
  }
}

export default App;
