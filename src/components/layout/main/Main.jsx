import style from "./main.module.css";
import Card from "../../ui/card/Card.jsx";
import axios from "axios";
// import posts from "../../../data/posts.js";
import { useEffect, useState } from "react";

const initialFormData = {
    title: "",
    content: "",
    image: "",
    published: false,
    tags: [false, false, false, false],
};
const langTags = ["html", "css", "js", "php"];

export default function Main() {
    const [postsArray, setPostsArray] = useState([]);
    const [formData, setFormData] = useState(initialFormData);
    const BASE_URI = "http://localhost:3000"
    function fetchData() {
        axios.get(`${BASE_URI}/posts`)
            .then((res) => {
                setPostsArray(res.data)
            })
            .catch((err) => {
                console.error("Errore nella richiesta", err.message);
            });
    }
    useEffect(() => {
        fetchData()
    }, [])

    function handleFormData(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        if (e.target.name === "tags") {
            const index = parseInt(e.target.dataset.index, 10);
            setFormData((formData) => ({
                ...formData,
                tags: formData.tags.map((tag, i) => (i === index ? value : tag)),
            }));
        } else {
            setFormData((formData) => ({
                ...formData,
                [e.target.name]: value,
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const selectedTags = formData.tags
            .map((isSelected, index) => (isSelected ? langTags[index] : null))
            .filter(Boolean);

        const newPost = {
            id: postsArray.length + 1,
            ...formData,
            tags: selectedTags,
        };
        axios.post(`${BASE_URI}/posts`, newPost)
            .then((res) => {
                setPostsArray((postsArray) => [...postsArray, newPost]);
                setFormData(initialFormData);

            }).catch((err) => {
                console.error("Errore nell'aggiunta del POST", err.message)
            })

    }

    function deletePost(id) {
        const updatedPosts = postsArray.filter((post) => post.id !== id);
        setPostsArray(updatedPosts);
    }

    return (
        <div className="container">
            <div className={style.row}>
                <div className={style.col_12}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Inserisci il titolo:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                placeholder="Inserisci il titolo del post"
                                onChange={handleFormData}
                            />
                        </div>
                        <div>
                            <label htmlFor="content">Inserisci il contenuto del post:</label>
                            <input
                                type="text"
                                id="content"
                                name="content"
                                value={formData.content}
                                placeholder="Descrizione del tuo post"
                                onChange={handleFormData}
                            />
                        </div>
                        <div>
                            <label htmlFor="image">Inserisci l'URL dell'immagine:</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                placeholder="URL"
                                onChange={handleFormData}
                            />
                        </div>
                        <div>
                            <label htmlFor="published">Pubblicato</label>
                            <input
                                type="checkbox"
                                checked={formData.published}
                                id="published"
                                name="published"
                                onChange={handleFormData}
                            />
                        </div>
                        <div>
                            {langTags.map((tag, index) => (
                                <div key={tag}>
                                    <label htmlFor={tag}>{tag}</label>
                                    <input
                                        type="checkbox"
                                        id={tag}
                                        data-index={index}
                                        checked={formData.tags[index]}
                                        name="tags"
                                        onChange={handleFormData}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className={style.btn_form} type="submit">
                            Aggiungi Post
                        </button>
                    </form>
                </div>
                {postsArray.map((post) => (
                    post.published && (
                        <div className={style.col} key={post.id}>
                            <Card
                                URI={BASE_URI}
                                title={post.title}
                                image={post.image}
                                content={post.content}
                                tags={post.tags}
                            />
                            <button
                                className={style.btn_form}
                                onClick={() => deletePost(post.id)}
                            >
                                Elimina
                            </button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
