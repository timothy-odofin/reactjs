import { useEffect, useState } from "react"
import axios from "axios"
export default function MyBlogs(){
    const [blogs, setBlogs] = useState([])
    const [header, setHeader] = useState('')
    useEffect(()=>{
   changeHeader();
   fetchPosts()
    }
    ,[])
    const fetchPosts =async()=>{
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setBlogs(result.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    const changeHeader=()=>{
        setHeader("Welcome to my blog reactjs application")
    }
    return (
    
        <div>
        <h1>{header}</h1>  
       <div className="container">
        <div className="row">
     
     {blogs.map(blogItem=>
     <article className="col-sm-12">
      <h2>{blogItem.title}</h2>
        <p>{blogItem.body}</p>
      </article>
      )}
      
      </div>
      
       </div>

        </div>


    )
}