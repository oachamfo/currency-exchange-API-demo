import { useState } from "react";

//destructure getConvertedRate from props
//getConvertedRate is a function
export default function InputForm({ getConvertedRate }) {
  const [currency, setCurrency] = useState({
    baseAmount: "1",
    baseCurrency: "EUR",
    targetCurrency: "USD",
  });

  //handleChange() functionality
  const handleChange = (event) => {
    /*if a user selects a currency from the dropdown, set currency state using setCurrency() method
    when setCurrency() method is called:
        1.pass the curly braces {} into the parentheses to indicate we are passing an object
        2. use spread operator (...) when passing currency
        3. use square brackets to select a property on a state when using the event object and instead of the equal symbol, use a colon
        to assign the value since we are assigning a name and value pair on an object

    */
    setCurrency({ ...currency, [event.target.name]: event.target.value });
  };

  /*A state cannot be passed from child to parent. But a function can be passed from the parent to the child. And the child can
  pass property values on an object to that function as parameters. The parent component can then use those values via the
  function in the parent component.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    getConvertedRate(
      currency.baseAmount,
      currency.baseCurrency,
      currency.targetCurrency
    );
  };
  //the form to be returned to the user
  /*note that the name attribute is on the parent <select> element and not on the children <option> elements.
  And also a change in state will cause the component to re-render. So that implies, for example, for a text-box, the
  value attribute, if it is not made dynamic via the use of curly braces, the value of the textbox will be whatever 
  you set the value attribute to be in the code when the OnChange function for the textbox runs, updates the state 
  and in doing so causes the component to re-render, although the value stored in the state for the textbox will be 
  different from what is being shown in the textbox. So if you want the value shown in a textbox to match
  what the user has input, you have to make the value attribute for the textbox dynamic to match what is in the state.
  */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter your amount and select base currency:
            <input
              type="text"
              name="baseAmount"
              value={currency.baseAmount}
              onChange={handleChange}
            />
            <select
              name="baseCurrency"
              value={currency.baseCurrency}
              onChange={handleChange}
            >
              <option value="USD">USD</option>
              <option value="EUR" selected>
                EUR
              </option>
              <option value="GBP">GBP</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Select Target Currency
            <select
              name="targetCurrency"
              value={currency.targetCurrency}
              onChange={handleChange}
            >
              <option value="USD">USD</option>
              <option value="EUR" selected>
                EUR
              </option>
              <option value="GBP">GBP</option>
            </select>
          </label>
        </div>
        <input type="submit" />
      </form>
      <p>
        Convert {currency.baseAmount}
        {currency.baseCurrency}
      </p>
      <p>Target Currency {currency.targetCurrency}</p>
    </div>
  );
}
