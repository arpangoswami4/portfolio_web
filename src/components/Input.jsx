import React from "react";
import { camelToSnakeCaseString } from "../common";

const Input = ({ required = true, error, ...options }) => {
  const snakeName = camelToSnakeCaseString(options.name);
  return (
    <div>
      <input
        className="border-2 border-s-fuchsia-100 w-96 rounded-lg h-10 p-3 shadow-lg"
        {...options}
        required={required}
      />
      {error &&
        error[snakeName] &&
        error[snakeName].map((errorMessage) => {
          return (
            <div key={errorMessage} className="text-red-500">
              {options.placeholder} {errorMessage}
            </div>
          );
        })}
    </div>
  );
};

export default Input;
