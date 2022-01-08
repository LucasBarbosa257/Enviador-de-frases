let messages = [
    "Coloque suas mensagens aqui!",
]

const box = []


function whatsAppText(message) {
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var textbox = document.querySelector('footer .selectable-text');
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	document.querySelector('span[data-icon="send"]').click();
}


function ask(index) {
    whatsAppText(messages[index])
}

setInterval(
    () => {
        if (box.length < messages.length) {
            ask(box.length)
            box.push("1")
        }
    }, 5000)