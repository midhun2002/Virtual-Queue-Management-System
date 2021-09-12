import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogHeader from './Blogheader'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  const [posts, setPosts] = useState([])
  const [nav, setNav] = useState("")
  const [tags, setTags] = useState({})
  const [topic, setTopic] = useState([])
  useEffect(() => {
    axios.get('https://beginner-blog.herokuapp.com/posts')
      .then(res => { handleTags(res.data); setTopic(res.data); setPosts(res.data); })
      .catch(err => console.log(err))
  }, [])
  const handleTags = (Data) => {
    Data.map(data => {
      let topics = tags; !(data.Tag in tags) ? topics[[data.Tag]] = 1 : topics[data.T] += 1; setTags(topics)
    })
    return;
  }
  const handleSearch = (Tag) => {
    let temptopics = posts.filter(post => post.Tag === Tag)
    setTopic(temptopics);
  }
  const handleNav = (e) => {
    setNav(e.target.value);
    // let temptopics = posts.filter(post =>(true && text.test(post.Title)))
    // setTopic(temptopics);      
    return;
  }
  return (
    <div className="Home">
      <h1>Task Manager</h1>
      <button id="postbtn"><Link to="/postblog">Create new post</Link></button>
      <input id="search-bar" value={nav} onChange={(e) => handleNav(e)} autoComplete="on" placeholder="Enter any topic you interested"></input>
      <div className="Tags">
        {
          Object.keys(tags).map((key, value) => <button key={key} onClick={() => handleSearch(key)} className="Taginfo">{key}({tags[key]})</button>)
        }
      </div>
      <div className="blog-content">
        {
          topic.map((post) => {
            return <BlogHeader key={post._id} post={post}></BlogHeader>
          })
        }
      </div>
    </div>
  );
}

export default Home