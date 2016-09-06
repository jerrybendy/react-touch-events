# react-touch-events
Enable tap / swipe events for react


## Usage

```js
import ReactTouchEvents from "react-touch-events";
```

in React

```js
<ReactTouchEvents 
    onTap={ this.handleTap }
    onSwipe={ this.handleSwipe }
    >
```

`onTap` will also bind `click` event.


The full example:

```js
import React from "react";
import ReactTouchEvents from "react-touch-events";

class Test extends React.Components {

    handleTap () {
    
        console.log("you have taped me");
    
    }
    
    handleSwipe (direction) {
    
        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":
            
                console.log(`you swiped ${direction}`)
        
        }
    }



    render () {
        <ReactTouchEvents
            onTap={ this.handleTap.bind(this) }
            onSwipe={ this.handleSwipe.bind(this) }
            >
            
            <button>Tap me</button>
            
        </ReactTouchEvents>
    
    }


}
```