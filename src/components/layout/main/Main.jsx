import style from "./main.module.css"
import Card from "../../ui/card/Card.jsx"
import posts from "../../../data/posts.js"
import { useState } from "react"
export default function () {
    const [newPostTitle, setNewPostTitle] = useState("")
    const [postsArray, setPostsArray] = useState(posts)
    function addPost(e) {
        e.preventDefault();
        if (newPostTitle.trim() === "") return;

        const newPost = {
            id: postsArray.length + 1,
            title: newPostTitle,
            image: undefined,
            content: "Nuovo contenuto del post",
            tags: ["nuovo"],
            published: true,
        };

        setPostsArray([...postsArray, newPost]);
        setNewPostTitle("");
    }

    return (
        <div className="container">
            <div className={style.row}>
                <div className={style.col_12}>
                    <form onSubmit={addPost}>
                        <input type="text" value={newPostTitle} placeholder="Inserisci il titolo del post" onChange={(e) => { setNewPostTitle(e.target.value) }} />
                        <button className={style.btn_form} type="submit">AGGIUNGI POST</button>
                    </form>
                </div>
                {postsArray.map(post => (
                    post.published ?
                        <div className={style.col} key={post.id}>
                            <Card title={post.title} image={post.image} content={post.content} tags={post.tags} />
                        </div> : null

                ))}
            </div>
        </div>
    )
}
