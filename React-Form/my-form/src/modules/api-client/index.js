import React, { useEffect, useState } from "react"
const ApiClient = () => {
    const [posts, setPosts] = useState([]);
   // const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/posts")
            const data = await res.json()
            setPosts(data)
        }
        fetchData()
    }, [])
    return (
       <div>
         <p>API CLIENT</p>
         <table>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                {posts.map(post => (
                    <tr>
                        <td>{post.id}</td>,
                        <td>{post.title}</td>,
                        <td>{post.author}</td>
                    </tr>
                ))}
            </table>
         </table>
       </div>

    )
}
export default ApiClient