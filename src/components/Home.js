import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        firestore
        .collection('posts')
        .get()
        .then((snapshot)=>{
            const posts = snapshot.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            });
            console.log('posts',posts);
            setPosts(posts)
        })
    },[])

    return (
        <div className="home">
            <h1>My Tech Blog</h1>
            <div id="blog-by">By Ruchit</div>

            {posts.map((post,index)=>(
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <p>{post.title}</p>
                    </Link>
                    <p>{post.subtitle}</p>
                </div>
            ))}
        </div>
    );
}
export default Home;