const btn = document.getElementById('generate-btn');
const quoteArea = document.getElementById('quote');
const apiUrl = 'http://philosophy-quotes-api.glitch.me/quotes';
btn.addEventListener('click', randomQuote);

async function randomQuote() {
  const response = await fetch(apiUrl);
  console.log('reponse', response);
  const quote = await response.json();
  console.log('quote', quote);
  const random = Math.floor(Math.random() * 45);
  console.log('random', random);
  const randomQuote = quote[random];
  console.log('randomQuote', randomQuote);
  quoteArea.textContent = `${randomQuote.quote} -${randomQuote.source}`;
}
