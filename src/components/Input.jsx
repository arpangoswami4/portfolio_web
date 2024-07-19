import React from "react";
import { camelToSnakeCaseString } from "../common";

const Input = ({ required = true, error, placeholder, ...options }) => {
  const snakeName = camelToSnakeCaseString(options.name);
  const updatedPlaceholder = required ? placeholder + "*" : placeholder;
  return (
    <div>
      <input
        className="border-2 border-s-fuchsia-100 w-96 rounded-lg h-10 p-3 shadow-lg"
        {...options}
        placeholder={updatedPlaceholder}
        required={required}
      />
      {error &&
        error[snakeName] &&
        error[snakeName].map((errorMessage) => {
          return (
            <div key={errorMessage} className="text-red-500">
              {placeholder} {errorMessage}
            </div>
          );
        })}
    </div>
  );
};

export default Input;
