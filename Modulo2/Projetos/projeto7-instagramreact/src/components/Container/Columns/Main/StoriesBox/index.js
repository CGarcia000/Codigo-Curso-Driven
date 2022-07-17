
import { Storie } from "./Storie";

const storiesArr = [
    { src:"img/9gag.png", name:'9gag', link: "https://instagram.com"},
    { src:"img/meowed.png", name:'meowed', link: "https://instagram.com"},
    { src:"img/barked-storie.png", name:'barked', link: "https://instagram.com"},
    { src:"img/nathanwpylestrangeplanet.png", name:'nathanwpyle...', link: "https://instagram.com"},
    { src:"img/wawawiwacomicsa.png", name:'wawawiwac...', link: "https://instagram.com"},
    { src:"img/respondeai-storie.png", name:'respondeai', link: "https://instagram.com"},
    { src:"img/filomoderna.png", name:'filomoderna', link: "https://instagram.com"},
    { src:"img/memeriagourmet.png", name:'memeriago', link: "https://instagram.com"},
]

export function StoriesBox() {
    return (
        <div id="stories-box">
            {storiesArr.map(storie => <Storie srcImg={storie.src} nameUserStorie={storie.name} userLink={storie.link}/>)}

            <button class="btn-app"><i class="fa-solid fa-circle-chevron-right fa-2xl"></i></button>
        </div>
    );
}