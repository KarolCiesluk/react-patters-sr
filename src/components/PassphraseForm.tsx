import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../App";

const PassphraseForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const { password, toggleIsLogged } = useContext(LoginContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (inputValue === password) {
      toggleIsLogged();
      navigate("/content");

    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <h1>Enter your password</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <input value={inputValue} onChange={handleInputChange} />
        </label>
        <button>Submit</button>
      </form>

      {isError && <p>Incorrect password. Try again</p>}
    </>
  );
};

export default PassphraseForm;