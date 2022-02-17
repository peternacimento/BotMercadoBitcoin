require('dotenv-safe').config();
const { MercadoBitcoin } = require('./api');

const infoApi = new MercadoBitcoin({ CURRENCY: 'BTC' });

setInterval(async () => {
    const response = await infoApi.ticker();
    console.log(response);
    if (response.ticker.sell > (response.ticker.sell + (response.ticker.sell * (1.1)))) //Usando 10%
        return console.log('Tá caro, aguardar')
    else
        return console.log('Tá barato, comprar')

}, process.env.CRAWLER_INTERVAL)