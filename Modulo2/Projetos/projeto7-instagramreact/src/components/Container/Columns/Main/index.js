import { StoriesBox } from "./StoriesBox/index";
import { PostColumn } from "./PostColumn";


export function Main() {
    return (
        <div id="box-right">
            <div id="coluna-principal">
                <StoriesBox />

                <PostColumn />
            </div>
        </div>
    );
}