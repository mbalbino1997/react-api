import style from "./card.module.css"
import Button from "../button/Button.jsx"
import placeholder from "../../../assets/imgs/placeholder.jpg"
const tagColors = {
    html: style.red,
    css: style.blue,
    php: style.green,
    js: style.yellow,
}
export default function ({ title = "", image, content = "", tags }) {
    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image || placeholder} alt={title} /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <div className={style.d_flex}>
                    {tags.map((tag, id) => (
                        <span key={id} className={tagColors[tag] || ""}>{tag} </span>
                    ))}
                </div>
                <p>{content}</p>
                <Button />
            </div>
        </div>
    )
}