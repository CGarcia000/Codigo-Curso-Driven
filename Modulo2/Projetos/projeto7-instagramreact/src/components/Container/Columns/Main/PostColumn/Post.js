

export function Post({
    user,
    postImg,
    likes
}) {
    return (
        <div class="post">
            <div class="post-header"> 
                <div class="post-user">
                    <img src={user.avatar} alt="" />
                    <a href="https://instagram.com"><span>{user.name}</span></a>
                </div>
                
                <a href=""><i class="fa-solid fa-ellipsis"></i></a>
            </div>
            <img src={postImg.src} class="post-img" alt="" />
            <div class="post-footer">
                <div>
                    <div class="react-buttons">
                        <a href="#"><i class="fa-regular fa-paper-plane"></i></a>
                        <a href="#"><i class="fa-regular fa-comment"></i></a>
                        <a href="#"><i class="fa-regular fa-heart"></i></a>
                    </div>
                    <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                </div>
                <div class="like-important">
                    <img src={likes.important.userAvatar} alt="" />
                    <p>
                        Curtido por <span class="bold">{likes.important.userName}</span> e <span class="bold">outras {likes.number} pessoas</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

