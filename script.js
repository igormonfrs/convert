// Cotação de moedas do dia.
const USD = 5.59;
const EUR = 6.18;
const GBP = 7.32;

// Obtendo os elementos do formulário
const form = document.querySelector("form") 
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  
  // procurar texto na string.
  const hasCharactersRegex = /\D+/g 

  // replace pega a expressão e procura o padrão, e faz a substituição
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break
    case "GBP": 
      convertCurrency(amount.value, GBP,"£");
      break

  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
