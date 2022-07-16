

export function SuggestionItem({
    userAvatar,
    userName,
    isFollower,
    reason,
}) {
    return(
        <div class="sugestao">
            <div class="sugestao-info">
                <a href="https://instagram.com"><img src={userAvatar} alt="" /></a>
                <div>
                    <a href="https://instagram.com"><p class="bold">{userName}</p></a>
                    <p>{isFollower ? 'Segue você' : reason}</p>
                </div>
            </div>
            <a href="">Seguir</a>
        </div>
    );
}