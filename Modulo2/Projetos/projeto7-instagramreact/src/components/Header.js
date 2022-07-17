

export function Header() {
    return (
        <div id="header">
            <div id="logo">
                <div>
                    <a href="https://instagram.com"><i class="fa-brands fa-instagram fa-lg"></i></a>
                </div>
                <a href="https://instagram.com"><img src="img/logo.png" alt="logo Instagram" /></a>
            </div>
        
            <input type="text" placeholder="Pesquisar" id="barra-pesquisa" />
            
            <div id="buttons">
                <button class="btn-app"><i class="fa-regular fa-paper-plane"></i></button>
                <button class="btn-app"><i class="fa-regular fa-compass"></i></button>
                <button class="btn-app"><i class="fa-regular fa-heart"></i></button>
                <button class="btn-app"><i class="fa-regular fa-user"></i></button>
                {/* <a href="#"><i class="fa-regular fa-paper-plane"></i></a>
                <a href="#"><i class="fa-regular fa-compass"></i></a>
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-regular fa-user"></i></a>*/}
            </div>
        </div>
    )
}