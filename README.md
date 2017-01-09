# react-touch-events  [![](https://img.shields.io/npm/v/react-touch-events.svg)](https://www.npmjs.com/package/react-touch-events)
Enable tap / swipe events for react


## Install

Use `npm`

```shell
npm i -S react-touch-events
```

We have removed all click events from `ReactTouchEvents` since v2.x. If you want use click event fallback, please use the v1.x version with `npm i -S react-touch-events@1`.


## Usage

```js
import ReactTouchEvents from "react-touch-events";
```

You can also use as UMD mode. Download the library file from `lib/index.js`(there provide uncompress file only) and add a `script` tag like this and you can use `window.ReactTouchEvents` now:

```html
<script src="path/to/lib/index.js"></script>
```


In React

```js
<ReactTouchEvents 
    onTap={ this.handleTap }
    onSwipe={ this.handleSwipe }
    >
```


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


