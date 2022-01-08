Olá, este é um código que enviará mensagens automáticas no teu Whatsapp web. Para utilizado é só seguir os seguintes passos:

1 - Entrar na conversa desejada e abrir o DevTools
2 - Colocar suas mensagens dentro dos conchetes como no exemplo a seguir:

let messages = [
    "Oi", "Prazer", "Tudo bem?",
]

Cada mensagem deve estar dentro de aspas e separados por vírgula da anterior.



3 - Escolha o tempo de intervalo entre cada mensagem, seguindo o exemplo a seguir:

setInterval(
    () => {
        if (box.length < messages.length) {
            ask(box.length)
            box.push("1")
        }
    }, 5000) <-- este número determina o intervalo!

5000 = 5 segundos entre cada mensagem;
7000 = 7 segundos;
2000 = 2 segundos;
E assim por diante!



4 - Com o código pronto é so colar ele no console que irá funcionar.

Espero que goste desse protótipo de bot e obrigado por testá-lo <3 !!!
