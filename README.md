## react-scrap

A utility for quickly creating hassle-free React components with class names managed by the [JedWatson/ClassNames](https://github.com/JedWatson/classnames) module.

## Install

```bash
npm install react-scrap
```

## API

```js
scrap(BaseComponent="div" [, ...staticNames, dynamicNamesFn])
```

Takes a base component, any number of static class names as strings or objects, and an optional dynamic class name render function that receives props and returns any number of dynamic class names.

## Example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import scrap from "react-scrap";

const Button = scrap("button", "btn", ({type="default", disabled}) => [
	`btn-${props.type}`,
    {"btn-disabled": disabled}
]);

const PirateButton = scrap(Button, "pirate");

function App() {
  return (
  	<div>
  	  <Button type="primary" disabled>
	    Press Me
  	  <Button>
      <PirateButton type="danger">
      	YARR!
      </PirateButton>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector("#app-container"));
```

renders into:

```html
<div>
  <button class="btn btn-primary btn-disabled" disabled>
    Press Me
  <button>
  <button class="btn btn-danger pirate">
    YARR!
  </button>
</div>

```
