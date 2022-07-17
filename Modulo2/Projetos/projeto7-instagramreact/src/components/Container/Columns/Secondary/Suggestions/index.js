import { SuggestionItem } from "./SuggestionItem";

const suggestionsArr = [
    {
        userAvatar: "img/badvibesmemes.png",
        userName: "bad.vibes.memes",
        isFollower: true,
        reason: '',
    },
    {
        userAvatar: "img/chibirdart.png",
        userName: "chibirdart",
        isFollower: true,
        reason: '',
    },
    {
        userAvatar: "img/razoesparaacreditar.png",
        userName: "razoesparaacreditar",
        isFollower: false,
        reason: 'Novo no Instagram',
    },
    {
        userAvatar: "img/adorableanimals-sugestao.png",
        userName: "adorable_animals",
        isFollower: true,
        reason: '',
    },
    {
        userAvatar: "img/smallcutecats.png",
        userName: "smallcutecats",
        isFollower: true,
        reason: '',
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