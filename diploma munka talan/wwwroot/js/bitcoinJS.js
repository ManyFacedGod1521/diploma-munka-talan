function fetchdata() {


    // API key: 988c288493fc8a41ce21f55d235b57a6608e4409
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((result) => {
            //console.log(result);
            if (!result.ok) {
                throw Error
            }

            return result.json();
        })

        .then((data) => {
            console.log(data);
            var pozition = document.getElementById('');

            var usdRate = data.bpi.USD.rate;
            var usdSymbol = data.bpi.USD.symbol;
            var gbpRate = data.bpi.GBP.rate;
            var gbpSymbol = data.bpi.GBP.symbol;
            var eurRate = data.bpi.EUR.rate;
            var eurSymbol = data.bpi.EUR.symbol;
            //pozition.insertAdjacentHTML('afterbegin', `<h1>${btcRate}</h1>`);
            document.querySelector('#USDrate').innerHTML = `<a>${usdRate}</a>`;
            document.querySelector('#USDsymbol').innerHTML = `<a>${usdSymbol}</a>`;
            document.querySelector('#GBPrate').innerHTML = `<a>${gbpRate}</a>`;
            document.querySelector('#GBPsymbol').innerHTML = `<a>${gbpSymbol}</a>`;
            document.querySelector('#EURrate').innerHTML = `<a>${eurRate}</a>`;
            document.querySelector('#EURsymbol').innerHTML = `<a>${eurSymbol}</a>`;
        })

        .catch((err) => {
            console.log("HIBA");
        });
}
fetchdata();
setInterval(function () {fetchdata()}, 7000);