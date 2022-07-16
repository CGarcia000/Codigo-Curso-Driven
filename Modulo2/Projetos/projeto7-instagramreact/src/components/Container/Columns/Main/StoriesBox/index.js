
import { Storie } from "./Storie";

const storiesArr = [
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
    { src:"img/9gag.png", name:'9gag'},
]

export function StoriesBox() {
    return (
        <div id="stories-box">
            {storiesArr.map(storie => <Storie srcImg={storie.src} nameUserStorie={storie.name} />)}

            <a href="#"><i class="fa-solid fa-circle-chevron-right fa-2xl"></i></a>
        </div>
    );
}