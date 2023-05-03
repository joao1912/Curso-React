import './Styles.css';

import { Component } from 'react';

import { loadPost } from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';


export class Home extends Component {
  state = {
    posts: [],
    AllPosts: [],
    page: 0,
    postsPerPage: 100
  }
  

  async componentDidMount() {
   await this.loadPost()
  }

  loadPost = async () => {

    const { page, postsPerPage } = this.state;
    
    const postsAndPhotos = await loadPost()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      AllPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      AllPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage
    const nextPosts = AllPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  }

  render() {
    const { posts, page, postsPerPage, AllPosts } = this.state;

    const noMorePage = page + postsPerPage >= AllPosts.length
    console.log(noMorePage)
    return(
      <section className='container'>
        <Posts 
          posts={posts}
        />
        <div className='button-container'>
          <Button
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disabeld={noMorePage}
          />
        </div>
        
      </section>
      
    );
  }
}

// export default Home;
