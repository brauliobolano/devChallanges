import "./Button.css";
import { useState } from "react";

type Props = {
  darkMode: string;
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
  codeLanguage: string;
  setCodeLanguage: React.Dispatch<React.SetStateAction<string>>;
  codeLanguageButton: string;
  setCodeLanguageButton: React.Dispatch<React.SetStateAction<string>>;
};

const ButtonLeftDiv = ({
  darkMode,
  codeLanguage,
  codeLanguageButton, // <-- The TEXT displayed on the screen
  setDarkMode,
  setCodeLanguage,
  setCodeLanguageButton,
}: Props) => {
  /*   const handleDarkMode = () => {
    darkMode === "vs-dark" ? setDarkMode("vs-light") : setDarkMode("vs-dark");
  }; */

  const [darkModeDropdownOpen, setDarkModeDropdownOpen] = useState(false);
  const [codeLanguageDropdownOpen, setCodeLanguageDropdownOpen] =
    useState(false);
  const [darkModeButton, setDarkModeButton] = useState("Light"); // <-- The TEXT displayed on the screen

  /* Dropdown handles */
  const handleDarkModeDropdown = () => {
    setDarkModeDropdownOpen(!darkModeDropdownOpen);
  };
  const handleCodeLanguageDropdown = () => {
    setCodeLanguageDropdownOpen(!codeLanguageDropdownOpen);
  };

  // Handle Language Change and Dark Mode Change
  const handleCodeLanguage = (language: string) => {
    setCodeLanguage(language);
    switch (
      language // <-- Add this switch statement
    ) {
      case "html":
        setCodeLanguageButton("HTML");
        break;
      case "css":
        setCodeLanguageButton("CSS");
        break;
      case "javascript":
        setCodeLanguageButton("JavaScript");
        break;
      case "python":
        setCodeLanguageButton("Python");
        break;
      default:
        setCodeLanguageButton("HTML");
    }
  };
  const handleDarkMode = () => {
    if (darkMode === "vs-dark") {
      setDarkMode("vs-light");
      setDarkModeButton("Light");
    } else {
      setDarkMode("vs-dark");
      setDarkModeButton("Dark");
    }
    setDarkModeDropdownOpen(!darkModeDropdownOpen);
  };
  //Handle Dark Mode was design so that the first mode option in the dropdown menu is the opposite of the current mode. And the second option is the current mode. This way the user can easily switch between the two modes.

  return (
    <div className="codeDBLeft">
      <div className="codeDBtnL">
        <button className="codeDBtnL2" onClick={handleCodeLanguageDropdown}>
          <span>{codeLanguageButton}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3335 6.1133C11.2086 5.98913 11.0396 5.91943 10.8635 5.91943C10.6873 5.91943 10.5184 5.98913 10.3935 6.1133L8.00013 8.4733L5.64013 6.1133C5.51522 5.98913 5.34625 5.91943 5.17013 5.91943C4.994 5.91943 4.82504 5.98913 4.70013 6.1133C4.63764 6.17527 4.58805 6.249 4.5542 6.33024C4.52036 6.41148 4.50293 6.49862 4.50293 6.58663C4.50293 6.67464 4.52036 6.76177 4.5542 6.84301C4.58805 6.92425 4.63764 6.99799 4.70013 7.05996L7.52679 9.88663C7.58877 9.94911 7.6625 9.99871 7.74374 10.0326C7.82498 10.0664 7.91212 10.0838 8.00013 10.0838C8.08814 10.0838 8.17527 10.0664 8.25651 10.0326C8.33775 9.99871 8.41149 9.94911 8.47346 9.88663L11.3335 7.05996C11.3959 6.99799 11.4455 6.92425 11.4794 6.84301C11.5132 6.76177 11.5307 6.67464 11.5307 6.58663C11.5307 6.49862 11.5132 6.41148 11.4794 6.33024C11.4455 6.249 11.3959 6.17527 11.3335 6.1133Z"
              fill="#364153"
            />
          </svg>
        </button>
        {/* <-- DropDown Menu Below --> */}
        {codeLanguageDropdownOpen && (
          <div className="dropdown">
            <ul className="dropdownUL">
              <li
                onClick={() => handleCodeLanguage("html")}
                className="dropdownIL"
              >
                HTML
              </li>
              <li
                onClick={() => handleCodeLanguage("css")}
                className="dropdownIL"
              >
                CSS
              </li>
              <li
                onClick={() => handleCodeLanguage("javascript")}
                className="dropdownIL"
              >
                JavaScript
              </li>
              <li
                onClick={() => handleCodeLanguage("python")}
                className="dropdownIL"
              >
                Python
              </li>
              {/* <-- Add More --> */}
              <li
                /* onClick={() => handleCodeLanguage("python")} */
                className="dropdownIL"
              >
                Language
              </li>
              <li
                /* onClick={() => handleCodeLanguage("python")} */
                className="dropdownIL"
              >
                Language
              </li>
              {/* <-- Add More --> */}
              {/* <-- Add More --> */}
              {/* <-- Add More --> */}
            </ul>
          </div>
        )}
      </div>

      <div className="codeDBtnL">
        <button
          onClick={handleDarkModeDropdown}
          className="codeDBtnL2"
          style={{ marginLeft: "10px" }}
        >
          <span>{darkModeButton}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3335 6.1133C11.2086 5.98913 11.0396 5.91943 10.8635 5.91943C10.6873 5.91943 10.5184 5.98913 10.3935 6.1133L8.00013 8.4733L5.64013 6.1133C5.51522 5.98913 5.34625 5.91943 5.17013 5.91943C4.994 5.91943 4.82504 5.98913 4.70013 6.1133C4.63764 6.17527 4.58805 6.249 4.5542 6.33024C4.52036 6.41148 4.50293 6.49862 4.50293 6.58663C4.50293 6.67464 4.52036 6.76177 4.5542 6.84301C4.58805 6.92425 4.63764 6.99799 4.70013 7.05996L7.52679 9.88663C7.58877 9.94911 7.6625 9.99871 7.74374 10.0326C7.82498 10.0664 7.91212 10.0838 8.00013 10.0838C8.08814 10.0838 8.17527 10.0664 8.25651 10.0326C8.33775 9.99871 8.41149 9.94911 8.47346 9.88663L11.3335 7.05996C11.3959 6.99799 11.4455 6.92425 11.4794 6.84301C11.5132 6.76177 11.5307 6.67464 11.5307 6.58663C11.5307 6.49862 11.5132 6.41148 11.4794 6.33024C11.4455 6.249 11.3959 6.17527 11.3335 6.1133Z"
              fill="#364153"
            />
          </svg>
        </button>
        {/* <-- DropDown Menu Below--> */}
        {darkModeDropdownOpen && (
          <div className="dropdown">
            <ul className="dropdownUL">
              <li className="dropdownIL" onClick={() => handleDarkMode()}>
                {darkMode === "vs-dark" ? "Light" : "Dark"}
              </li>
              <li className="dropdownIL">{darkModeButton}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonLeftDiv;
