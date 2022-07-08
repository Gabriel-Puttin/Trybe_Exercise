const apiUrl = 'https://api.coincap.io/v2/assets/';

function fetchCrypto() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((value) => value.data
    .filter((coin) => Number(coin.rank <= 10))
    .map((crypto) => {
      const li = document.createElement('li');
      const ul = document.querySelector('#cryptoList');
      const price = Number(crypto.priceUsd);
      li.innerText = `${crypto.name} (${crypto.symbol}): ${price.toFixed(2)} U$`;
      ul.appendChild(li);
    }))
}

fetchCrypto();
