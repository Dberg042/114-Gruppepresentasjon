const output = document.getElementById("upDateText");
const output2 = document.getElementById("upDateText2");
const formInput = document.getElementById('formInput');
const form = document.getElementById('myform');

class Message {
    constructor(name) {
        this.name = name;
    }
    say() {
        return `${this.name}`;
    }
}

form.addEventListener('submit', function(event) {
    const name = formInput.value;
    const message = new Message(name);
    const sentence = message.say();
    output.textContent = sentence;
    output2.textContent = sentence;
    event.preventDefault();
});