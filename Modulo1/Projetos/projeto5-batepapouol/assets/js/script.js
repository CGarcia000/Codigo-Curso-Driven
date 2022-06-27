const container = document.getElementById('container');
const inputMensagem = document.getElementById('msg-text');

let userName;

function userOn() {
    userName = prompt('Qual o seu nome?');
    objUser = { name: userName };
    const promiseUsuario = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objUser);
    
    promiseUsuario.then(res => {
            setInterval(() => {
                axios.post("https://mock-api.driven.com.br/api/v6/uol/status", objUser);
            }, 4700);
    });
    
    promiseUsuario.catch(e => {
            console.log(e);
            userOn(); 
    });
}

function iniciarBatePapo() {

    carregaMensagens();
    setInterval(carregaMensagens, 3000);

    userOn();
}

let ultimaMsg;

function carregaMensagens() {
    container.innerHTML = '';
    // shouldScroll = container.scrollTop + container.clientHeight === container.scrollHeight;

    const promiseMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

    promiseMsg.then(res => {
            const msgs = res.data;
            for (let i = 0; i < msgs.length; i++) {
                const isRelatedToUser = msgs[i].to === userName || msgs[i].to === "Todos" || msgs[i].from === userName;
                if (msgs[i].type === 'private_message' && (!isRelatedToUser)) continue;
                const mensagem = `<div class="mensagem ${msgs[i].type}">
                    <div class="msg">
                        <span class="time">(${msgs[i].time})</span>
                        <span class="usuario bold">${msgs[i].from}</span> para 
                        <span class="usuario-destino bold">${msgs[i].to}</span>: 
                        ${msgs[i].text}
                    </div>
                </div>`
                container.innerHTML += mensagem;

                if (i === 99) {
                    container.lastChild.scrollIntoView();
                    ultimaMsg = mensagem;
                }
            } 
    });
    promiseMsg.catch(e => {
            console.log(e);
    });

    // if (!shouldScroll) {
    //     scrollToBottom();
    // }
}



iniciarBatePapo();

function enviaMensagem () {
    console.log(inputMensagem.value);
    const objMsg = {
        from: userName,
        to: 'Todos',
        text: inputMensagem.value,
        type: 'message',
    }
    const promiseInput = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', objMsg);
    console.log(promiseInput);
    inputMensagem.value = '';
    promiseInput.then(carregaMensagens);
    promiseInput.catch(e => {
        console.log(e);
        window.location.reload();
    })
}
