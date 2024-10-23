/* ---------- Temperature Conversion Program ---------- */
const celsius = document.getElementById("celsius");
const toCelsius = document.getElementById("toCelsius");
const fahrenheit = document.getElementById("fahrenheit");
const toFahrenheit = document.getElementById("toFahrenheit");
const kelvin = document.getElementById("kelvin");
const toKelvin = document.getElementById("toKelvin");
const rankine = document.getElementById("rankine");
const toRankine = document.getElementById("toRankine");
const reaumur = document.getElementById("reaumur");
const toReaumur = document.getElementById("toReaumur");
const resultDisplay = document.getElementById("result");
let convertedResult;

/* Temperature Conversion Program function() */
function convertedTemp() {
  let inputtedTemp = document.getElementById("inputTemp").value;
  let inputtedTempSymbols = "";
  let convertedTempSymbols = "";
  let errorMessageDisplay = [];

  //if inputtedTemp is empty value ------------------------------------------------------------------------
  if (inputtedTemp === "") {
    resultDisplay.style.color = `rgb(233, 0, 0)`;
    resultDisplay.textContent = `Please Input a valid temperature value first. 😩`;
    document.getElementById("inputTemp").value = "";
  } else {
    inputtedTemp = Number(inputtedTemp);

    //if celsius is checked ------------------------------------------------------------------------------
    if (celsius.checked) {
      inputtedTempSymbols = "°C";

      if (toCelsius.checked) {
        convertedResult = inputtedTemp;
      } else if (toFahrenheit.checked) {
        convertedResult = inputtedTemp * (9 / 5) + 32;
      } else if (toKelvin.checked) {
        convertedResult = inputtedTemp + 273.15;
      } else if (toRankine.checked) {
        convertedResult = (inputtedTemp + 273.15) * (9 / 5);
      } else if (toReaumur.checked) {
        convertedResult = inputtedTemp * (4 / 5);
      }
    }
    //if fahrenheit is checked --------------------------------------------------------------------------
    else if (fahrenheit.checked) {
      inputtedTempSymbols = "F";

      if (toCelsius.checked) {
        convertedResult = (inputtedTemp - 32) * (5 / 9);
      } else if (toFahrenheit.checked) {
        convertedResult = inputtedTemp;
      } else if (toKelvin.checked) {
        convertedResult = (inputtedTemp - 32) * (5 / 9) + 273.15;
      } else if (toRankine.checked) {
        convertedResult = inputtedTemp + 459.67;
      } else if (toReaumur.checked) {
        convertedResult = (inputtedTemp - 32) * (4 / 9);
      }
    }
    //if kelvin is checked -----------------------------------------------------------------------------
    else if (kelvin.checked) {
      inputtedTempSymbols = "K";

      if (toCelsius.checked) {
        convertedResult = inputtedTemp - 273.15;
      } else if (toFahrenheit.checked) {
        convertedResult = (inputtedTemp - 273.15) * (9 / 5) + 32;
      } else if (toKelvin.checked) {
        convertedResult = inputtedTemp;
      } else if (toRankine.checked) {
        convertedResult = inputtedTemp * (9 / 5);
      } else if (toReaumur.checked) {
        convertedResult = (inputtedTemp - 273.15) * (4 / 5);
      }
    }
    //if rankine is checked --------------------------------------------------------------------------
    else if (rankine.checked) {
      inputtedTempSymbols = "°R";

      if (toCelsius.checked) {
        convertedResult = (inputtedTemp - 491.67) * (5 / 9);
      } else if (toFahrenheit.checked) {
        convertedResult = inputtedTemp - 459.67;
      } else if (toKelvin.checked) {
        convertedResult = inputtedTemp * (5 / 9);
      } else if (toRankine.checked) {
        convertedResult = inputtedTemp;
      } else if (toReaumur.checked) {
        convertedResult = (inputtedTemp - 491.67) * (4 / 9);
      }
    }
    //if reaumur is checked -------------------------------------------------------------------------
    else if (reaumur.checked) {
      inputtedTempSymbols = "°Ré";

      if (toCelsius.checked) {
        convertedResult = inputtedTemp * (5 / 4);
      } else if (toFahrenheit.checked) {
        convertedResult = inputtedTemp * 2.25 + 32;
      } else if (toKelvin.checked) {
        convertedResult = inputtedTemp * (5 / 4) + 273.15;
      } else if (toRankine.checked) {
        convertedResult = (inputtedTemp * (5 / 4) + 273.15) * (9 / 5);
      } else if (toReaumur.checked) {
        convertedResult = inputtedTemp;
      }
    }
    // If there is not a single checked in the list of (FROM:)------------------------
    else {
      errorMessageDisplay.push("unit of measurement");
    }

    // Getting the temperature symbol ------------------------------------------------
    if (toCelsius.checked) {
      convertedTempSymbols = "°C";
    } else if (toFahrenheit.checked) {
      convertedTempSymbols = "°F";
    } else if (toKelvin.checked) {
      convertedTempSymbols = "K";
    } else if (toRankine.checked) {
      convertedTempSymbols = "°R";
    } else if (toReaumur.checked) {
      convertedTempSymbols = "°Ré";
    }
    // If there is not a single checked in the list of (TO:)--------------------------
    else {
      errorMessageDisplay.push("target converted unit");
    }

    // Displaying the error/s --------------------------------------------------------
    if (convertedResult === undefined || convertedTempSymbols === "") {
      resultDisplay.style.color = `rgb(233, 0, 0)`;
      resultDisplay.textContent = `You Must select your ${errorMessageDisplay.join(
        " and "
      )} 🤔`;
    } else {
      // Displaying the converted temperature ----------------------------------------
      resultDisplay.style.color = `rgb(40, 38, 36)`;
      resultDisplay.innerHTML = `Converted Temperature:<br/>${
        inputtedTemp + "" + inputtedTempSymbols
      } ➡️ ${convertedResult.toFixed(2)}${convertedTempSymbols}`;
    }
  }
}
