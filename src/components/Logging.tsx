import React from "react";

// Experiments with various logging components

export const LogQueryJSX = ({ children }) => (
  React.Children.only(React.cloneElement(
    children,
    {
      onCompleted: (...args) => {
        console.log('complted', ...args);
      }
      , onError: (error) => {
        console.error(`Error on ${name}`, error)
      }
    }
  ))
);
export const LogQuery = (callback) => (response, ...args) => {
  console.log(response);
  if (response.error) {
    console.error(args);
    console.error(response.error);
    return null;
  }
  return callback(response);
};