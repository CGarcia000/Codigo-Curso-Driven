import React from 'react';

export function Post({
    user,
    postImg,
    likes
}) {
    const [numLikes, setNumLikes] = React.useState(likes.number);
    const [isLiked, setIsLiked] = React.useState(false);

    function handleLike(e) {
        const heartIcon = e.currentTarget.childNodes[0]

        heartIcon.classList.toggle('liked');
        setIsLiked(current => !current);

        if (!isLiked) { // was not liked before
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            setNumLikes(numLikes + 1)
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            setNumLikes(numLikes - 1)
        }
    }

    return (
        <div class="post">
            <div class="post-header"> 
                <div class="post-user">
                    <img src={user.avatar} alt="" />
                    <a href={user.url}><span>{user.name}</span></a>
                </div>
                
                <a href=""><i class="fa-solid fa-ellipsis"></i></a>
            </div>
            <img src={postImg.src} class="post-img" alt="" />
            <div class="post-footer">
                <div>
                    <div class="react-buttons">
                        <button class="btn-app" onClick={handleLike}><i class="fa-regular fa-heart"></i></button>
                        <button class="btn-app"><i class="fa-regular fa-comment"></i></button>
                        <button class="btn-app"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                    <button class="btn-app"><i class="fa-regular fa-bookmark"></i></button>
                </div>
                <div class="like-important">
                    <img src={likes.important.userAvatar} alt="" />
                    <p>
                        Curtido por <span class="bold">{likes.important.userName}</span> e <span class="bold">outras {new Intl.NumberFormat('de-DE').format(numLikes)} pessoas</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

