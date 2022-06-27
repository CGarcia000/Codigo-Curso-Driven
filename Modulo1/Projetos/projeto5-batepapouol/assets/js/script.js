const container = document.getElementById('container');

function entraSala() {
    let isNameValid = false;
    let userName;
    while (!isNameValid) {
        userName = prompt('Qual o seu nome?')
        if (userName === null) continue;

        // const promisseUsuario = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', { name: userName });
        // promisseUsuario
        //     .then(res => {
        //         console.log(res);
        //         isNameValid = true;
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     });
    }
    return { name: userName };
}

function Conected() {
    const user = entraSala()

    // setInterval( () => {
    //     const promisseConect = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', user);
    //     promisseConect
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // }, 5000);

    setInterval(carregaMensagens, 3000);
}

Conected()


function carregaMensagens() {
    container.innerHTML = '';
    const promisseMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

    console.log(promisseMsg);
    promisseMsg
        .then(res => {
            const msgs = res.data;
            console.log(msgs);
            for (let i = 0; i < msgs.length; i++) {
                const mensagem = `<div class="mensagem ${msgs[i].type}">
                    <div class="msg">
                        <span class="time">(${msgs[i].time})</span>
                        <span class="usuario bold">${msgs[i].from}</span> para 
                        <span class="usuario-destino bold">${msgs[i].to}</span>: 
                        ${msgs[i].text}
                    </div>
                </div>`
                container.innerHTML += mensagem;
            } 
        })
        .catch(e => {
            console.log(e);
        });
}

