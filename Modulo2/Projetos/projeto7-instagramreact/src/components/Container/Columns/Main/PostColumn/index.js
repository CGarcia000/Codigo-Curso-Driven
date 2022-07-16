import { Post } from "./Post";

const postsArr = [
    {
        user: {
            avatar: "img/meowed.png",
            name: "meowed",
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
            number: 101.523, 
        }
    },
    {
        user: {
            avatar: "img/meowed.png",
            name: "meowed",
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
            number: 101.523, 
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