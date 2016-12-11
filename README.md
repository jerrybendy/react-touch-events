# react-touch-events  [![](https://img.shields.io/npm/v/react-touch-events.svg)](https://www.npmjs.com/package/react-touch-events)
Enable tap / swipe events for react


## Install

Use `npm`

```shell
npm i -S react-touch-events
```

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

~~`onTap` will also bind `click` event.~~ Before v1.1.0, `onTap` will auto bind `click` event. But it'll cause a click-through bug. So it has a simple fix after (include) v1.1.0 to use `disableClick` attribute. `onTap` will bind `click` event on default. You can use `disableClick={true}` to disable it.


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
            disableClick= { true }
            >
            
            <button>Tap me</button>
            
        </ReactTouchEvents>
    
    }


}
```

## LICENSE

MIT License

Copyright (c) 2016 Jerry Bendy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


