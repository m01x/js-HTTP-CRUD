/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const data = await response.json();
  console.log(data[0]);
  return data[0];
};

/**
 *
 * @param {HTMLElement} element
 */
export const BreakingbadApp = async element => {
  document.querySelector('#app-title').innerHTML = 'Breakingbad App';
  element.innerHTML = '⌛Loading... muriel🤤🤤';
  //await fetchQuote();

  const quoteLabel = document.createElement('blockquote');
  const autorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = '🔃Next Quote';

  const renderQuote = data => {
    quoteLabel.innerHTML = data.quote;
    autorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, autorLabel, nextQuoteButton);
  };

  //Tarea , agregar un listener al boton.
  nextQuoteButton.addEventListener('click', async () => {
    element.innerHTML = '⌛Loading... muriel🤤🤤';
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
