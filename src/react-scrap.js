import React from "react";
import classNames from "classnames";

function last(arr) {
  return arr[arr.length - 1];
}

export default function scrap(BaseComponent="div", ...rest) {
  const lastArg = last(rest);
  let dynamicNameFunc = null;
  let staticNames;
  let staticNameString;

  if(typeof lastArg === "function") {
    dynamicNameFunc = lastArg;
    staticNames = rest.slice(0, -1);
  } else {
    staticNames = rest;
  }

  staticNameString = classNames(...staticNames);

  return class Scrap extends React.Component {
    render() {
      const {props} = this;
      let className;

      if(dynamicNameFunc) {
        const dynamicNames = dynamicNameFunc(props);
        if(Array.isArray(dynamicNames)) {
          className = classNames(staticNameString, ...dynamicNames, props.className);
        } else {
          className = classNames(staticNameString, dynamicNames, props.className);
        }
      } else {
        className = classNames(staticNameString, props.className);
      }

      return (<BaseComponent {...props} className={className}/>);
    }
  };
}
