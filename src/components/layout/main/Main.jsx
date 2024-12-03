import style from "./main.module.css"
import Card from "../../ui/card/Card.jsx"
import posts from "../../../data/posts.js"
import { useState } from "react"

const initialFormData = {
    title: "titolo1",
    content: "Lorem ipsum",
    image: "data:image/jpeg;base64,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",
    published: false,
}
export default function () {
    const [postsArray, setPostsArray] = useState(posts)
    const [formData, setFormData] = useState(initialFormData);
    function handleFormData(e) {
        const value = e.target.type === "checkbox" ?
            e.target.checked : e.target.value;
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setPostsArray((postsArray) => [...postsArray, { id: postsArray.length + 1, ...formData }])
        setFormData(initialFormData);
    }
    function deletePost(id) {
        const updatedPosts = postsArray.filter(post => post.id !== id)
        setPostsArray(updatedPosts);
    }

    return (
        <div className="container">
            <div className={style.row}>
                <div className={style.col_12}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">inserisci il titolo</label>
                            <input type="text" id="title" name="title" value={formData.title} placeholder="Inserisci il titolo del post" onChange={handleFormData} />
                        </div>
                        <div>
                            <label htmlFor="published">pubblicato</label>
                            <input type="checkbox" checked={formData.published} id="published" name="published" onChange={handleFormData} />
                        </div>
                        <div>
                            <label htmlFor="html">HTML</label>
                            <input type="checkbox" id="html" name="html" onChange={handleFormData} />
                            <label htmlFor="css">CSS</label>
                            <input type="checkbox" id="css" name="css" onChange={handleFormData} />
                            <label htmlFor="js">Javascript</label>
                            <input type="checkbox" id="js" name="js" onChange={handleFormData} />
                            <label htmlFor="php">Php</label>
                            <input type="checkbox" id="php" name="php" onChange={handleFormData} />
                        </div>
                        <button className={style.btn_form} type="submit">AGGIUNGI POST</button>
                    </form>
                </div>
                {postsArray.map(post => (
                    post.published ?
                        <div className={style.col} key={post.id}>
                            <Card title={post.title} image={post.image} content={post.content} tags={post.tags} />
                            <button className={style.btn_form} onClick={() => deletePost(post.id)}>ELIMINA</button>
                        </div> : null

                ))}
            </div>
        </div>
    )
}
