const playButton = document.getElementById('adjustments__play-button');
const pauseButton = document.getElementById('adjustments__pause-button');
const stopButton = document.getElementById('adjustments__stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('adjustments__speed');
const moheganHowAreYou = document.getElementById('mohegan-how-are-you');
const moheganImWellAndYou = document.getElementById('mohegan-im-well-and-you');
const moheganGoodbyeToOne = document.getElementById('mohegan-goodbye-to-one');
const moheganGoodbyeToMany = document.getElementById('mohegan-goodbye-to-many');
let currentCharacter;

moheganHowAreYou.addEventListener('click', () => {
  textInput.innerText = 'tawn cuttie yo';
});

moheganImWellAndYou.addEventListener('click', () => {
  textInput.innerText = 'nukkawnkey chah. Key tawn cuttie yuh';
});

moheganGoodbyeToOne.addEventListener('click', () => {
  textInput.innerText = 'nahun shahsh';
});

moheganGoodbyeToMany.addEventListener('click', () => {
  textInput.innerText = 'nahun shock';
});

playButton.addEventListener('click', () => {
  playText(textInput.value);
});
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
speedInput.addEventListener('input', () => {
  stopText();
  playText(utterance.text.substring(currentCharacter));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener('end', () => {
  textInput.disabled = false;
});
utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex;
});

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}

moheganHowAreYou.addEventListener('click', () => {
  textInput.innerText = 'tawn cuttie yo';
});

moheganImWellAndYou.addEventListener('click', () => {
  textInput.innerText = 'nukkawnkey chah. Key tawn cuttie yuh';
});

moheganGoodbyeToOne.addEventListener('click', () => {
  textInput.innerText = 'nahun shahsh';
});

moheganGoodbyeToMany.addEventListener('click', () => {
  textInput.innerText = 'nahun shock';
});
