/*By Owusuduah Achamfour*/
/*A brief API functionality demo: currency conversion
API used: 
Exchange rate API | Forex API fastFOREX.io
https://www.fastforex.io 
*/

//imports
import "./App.css";
import InputForm from "./components/InputForm";
import DisplayConversion from "./components/DisplayConversion";
import { useState, useEffect } from "react";

function App() {
  //declare API key
  const myAPIKEY = process.env.REACT_APP_APIKEY;
  console.log(process.env);

  //declare state
  const [convertedRate, setConvertedRate] = useState({
    baseAmount: "",
    baseCurrency: "",
    targetCurrency: "",
    convertedRate: "",
    rate: "",
  });

  const getConvertedRate = async (baseAmount, baseCurrency, targetCurrency) => {
    console.log(baseAmount);
    const response = await fetch(
      `https://api.fastforex.io/convert?from=${baseCurrency}&to=${targetCurrency}&amount=${baseAmount}&api_key=${myAPIKEY}`
    );
    // json() function parses JSON response data into a JavaScript object
    const currency_data = await response.json();

    //setConvertedRate()
    setConvertedRate({
      baseAmount: baseAmount,
      baseCurrency: baseCurrency,
      targetCurrency: targetCurrency,
      convertedRate: currency_data?.result[targetCurrency],
      rate: currency_data?.result?.rate,
    });
  };

  return (
    <div>
      App component
      <InputForm getConvertedRate={getConvertedRate} />
      <DisplayConversion convertedRate={convertedRate} />
    </div>
  );
}

export default App;
