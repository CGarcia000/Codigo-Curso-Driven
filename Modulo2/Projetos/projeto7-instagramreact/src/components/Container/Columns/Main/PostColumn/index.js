import { Post } from "./Post";

const postsArr = [
    {
        user: {
            avatar: "img/meowed.png",
            name: "meowed",
            url: "https://instagram.com",
        },
        postImg: {
            src: "img/gato-telefone.png",
            alt: "",
        },
        likes: {
            important: {
                userAvatar: "img/respondeai.png",
                userName: "respondeai",
            },
            number: 101523, 
        }
    },
    {
        user: {
            avatar: "img/barked.png",
            name: "barked",
            url: "https://instagram.com",
        },
        postImg: {
            src: "img/dog.png",
            alt: "",
        },
        likes: {
            important: {
                userAvatar: "img/adorableanimals.png",
                userName: "adorable_animals",
            },
            number: 99159, 
        }
    },
]

export function PostColumn() {
    return (
        <div id="posts-column">
            {postsArr.map(post => <Post user={post.user} postImg={post.postImg} likes={post.likes}/>)}
        </div>
    );
}