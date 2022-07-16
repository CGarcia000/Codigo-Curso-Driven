
export function Storie({
    srcImg,
    nameUserStorie
}) {
    return (
        <div class="storie">
            <div class="storie-user">
                <a >
                    <img src="img/stories_background.jpg" class="storie-bg" alt="" />
                    <img src={srcImg} class="storie-icon" alt="" />
                </a> 
            </div>
            <p>{nameUserStorie}</p>        
        </div>
    );
}