import style from "./card.module.css";
import Button from "../button/Button.jsx";
import placeholder from "../../../assets/imgs/placeholder.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const tagColors = {
    html: style.red,
    css: style.blue,
    php: style.green,
    js: style.yellow,
}
export default function ({ title = "", image, content = "", tags = [], URI = "", onClick = () => { } }) {


    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image ? image.includes("https") ? image : `${URI}/${image}` : placeholder} alt={title} /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <div className={style.d_flex}>
                    {tags.map((tag, id) => (
                        <span key={id} className={tagColors[tag] || ""}>{tag} </span>
                    ))}
                </div>
                <p>{content}</p>
                <div className={style.lower_card}>
                    <Button />
                    <button className={style.btn_form} onClick={onClick}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    )
}