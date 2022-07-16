import { SuggestionItem } from "./SuggestionItem";

const suggestionsArr = [
    {
        userAvatar: "img/badvibesmemes.png",
        userName: "bad.vibes.memes",
        isFollower: true,
        reason: '',
    },
    {
        userAvatar: "img/badvibesmemes.png",
        userName: "bad.vibes.memes",
        isFollower: false,
        reason: 'Novo no site',
    },
]

export function Suggestions() {
    return(
        <div id="sugestoes-vc">
            <div>
                <p>Sugestões para você</p>
                <a href="">Ver tudo</a>
            </div>

            {suggestionsArr.map(suggestion => <SuggestionItem 
                userAvatar={suggestion.userAvatar} 
                userName={suggestion.userName} 
                isFollower={suggestion.isFollower} 
                reason={suggestion.reason} 
            />)}

        </div>
    );
}