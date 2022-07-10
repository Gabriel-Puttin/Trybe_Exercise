const apiUrl = 'https://api.coincap.io/v2/assets/';

async function fetchCrypto() {
  const coins = await fetch(apiUrl)
    .then((response) => response.json())
    .then((value) => value.data)
    .catch((error) => error.toString());
  return coins;
}

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCrypto();
  const usdCurrencies = await fetchUsdCurrencies();

  coins.filter((coin) => Number(coin.rank <= 10))
  .map((crypto) => {
    const li = document.createElement('li');
    const ul = document.querySelector('#cryptoList');
    const price = Number(crypto.priceUsd);
    const brlPrice = price * usdCurrencies.brl;
    li.innerText = `${crypto.name} (${crypto.symbol}): ${brlPrice.toFixed(2)} R$`;
    ul.appendChild(li);
  });
}

window.onload = () => setCoins();
