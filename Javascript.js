async function fetchBitcoinPrice() {
    try {
        // Hier gebruik ik een generiek endpoint. Vervang dit met het juiste Bybit API endpoint.
        const response = await fetch('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT');
        const data = await response.json();
        const btcPrice = data.result.find(item => item.symbol === 'BTCUSDT').last_price;
        document.getElementById('price').innerText = `Current Price: ${btcPrice} USDT`;
    } catch (error) {
        console.error('Error fetching price:', error);
        document.getElementById('price').innerText = "Failed to load price";
    }
}

setInterval(fetchBitcoinPrice, 1000); // Update elke seconde
fetchBitcoinPrice(); // Eerste fetch bij het laden van de pagina
