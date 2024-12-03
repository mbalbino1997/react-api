import style from "./main.module.css"
import Card from "../../ui/card/Card.jsx"
import posts from "../../../data/posts.js"
import { useState } from "react"

const initialFormData = {
    title: "",
    content: "Lorem ipsum",
    image: "",
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
                            <label htmlFor="image">inserisci l'URL dell'immagine</label>
                            <input type="text" id="image" name="image" value={formData.image} placeholder="URL" onChange={handleFormData} />
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
