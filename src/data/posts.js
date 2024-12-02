import img1 from "../assets/imgs/img1.jpg"
import img2 from "../assets/imgs/img2.jpg"
import img3 from "../assets/imgs/img3.jpeg"
const posts = [
    {
        id: 1,
        title: 'Titolo uno',
        image: img1 /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css', 'js', 'css', 'php', 'php', 'css', 'html'],
        published: true,
    },
    {
        id: 2,
        title: 'Titolo due',
        image: img2 /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: true,
    },
    {
        id: 3,
        title: 'Titolo tre',
        image: undefined /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: true,
    },
    {
        id: 4,
        title: 'Titolo quattro',
        image: img3 /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: false,
    },
]

export default posts;