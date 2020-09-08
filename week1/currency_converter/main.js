var rates = {
    USD_VND: 23123,
    EUR_VND: 27456,
    JPY_VND: 218
}
function handleConvert() {
    var currency = document.getElementById("currencies").value
    var result = document.getElementById("amount").value *
    rates[`${currency}_VND`]
    document.getElementById("result").innerHTML = `<h3>Result : ${result.toFixed(2)}</h3>`
}

function handleConvertWithApi(){
    var currency = document.getElementById("currencies").value;
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://free.currconv.com/api/v7/convert?q=${currency}_VND&compact=ultra&apiKey=e81378e11e46beb5a4a6`
    );

    xhr.onload = function () {
      if (xhr.status === 200) {
        var rate = JSON.parse(xhr.responseText);
        console.log(rate);
        var result =
          document.getElementById("amount").value *
          rate[`${currency}_VND`];
        document.getElementById(
          "result"
        ).innerHTML = `<h3>Result is: ${result.toFixed(2)}</h3>`;
      }
    };

    xhr.send();
}