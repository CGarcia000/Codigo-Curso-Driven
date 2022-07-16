
const account = {
    avatarSrc: "img/catanacomics.png",
    userName: "catacomics",
    name: "Catana",
}

export function AccountViewer() {
    return (
        <div class="conta">
            <a href="https://instagram.com"><img src={account.avatarSrc} alt="" /></a>
            <div>
                <a href="https://instagram.com"><p class="bold">{account.name}</p></a>
                <p>{account.name}</p>
            </div>
        </div>
    );
}