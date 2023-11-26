const text = document.getElementById('text');
const input = document.getElementById('input-text');
const textH1 = document.getElementById('text-h1');
const Symbol = document.getElementById('Symbol');
const time = document.getElementById('time');

let timerValue = 60;
let currentTextIndex = 0;
setInterval(updateTimer, 1000);

input.addEventListener('input', () => {
    const inputText = input.value;
    const originalText = textH1.textContent;

    text.innerHTML = ''; 
    let point = 0;
    let bug = 0;
    for (let i = 0; i < originalText.length; i++) {
        const span = document.createElement('span');
        span.textContent = originalText[i];
        text.style = 'width: 800px; font-size: 12px; text-align: center;outline: dotted;outline-color: #61dafb;padding: 10px;'
        textH1.remove()
        if (i < inputText.length) {
            if (inputText[i] === originalText[i]) {
                span.style.color = '#00ff00';
                point++
            } else {
                span.style.color = 'red';
                bug++
            }
        }
        

        text.appendChild(span);


    }
if (point + bug === originalText.length) {
    currentTextIndex = (currentTextIndex + 1) % texts.length; 
    input.value = '';
}
        
    Symbol.innerHTML = `Правильные символы: <span style="text-decoration: underline; color: #00ff00;">${point}</span><br>Ошибки: <span style="text-decoration: underline; color: red;">${bug}</span>`;
});

function updateTimer() {
    timerValue--;
    time.innerHTML = `Таймер : ${timerValue}`;

    if (timerValue === 0) {
        textH1.remove();
        input.remove();
        time.remove();
        
        Symbol.style = 'font-size: 20px';
    }
}


