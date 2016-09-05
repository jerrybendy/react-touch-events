/**
 * Created by jerry on 16/9/5.
 */


var React = require("react");
var PropTypes = React.PropTypes;



function touchX (event) {
    return event.touches [0].clientX;
}

function touchY (event) {
    return event.touches [0].clientY;
}



var ReactTouchEvents = React.createClass({

    propTypes: {
        children: PropTypes.node,
        tolerance: PropTypes.number,
        onTap: PropTypes.func,
        onSwipe: PropTypes.func
    },

    defaultProps: {
        tolerance: 10
    },

    handleClick: function () {
        if (!this.usingTouch && this.props.onPoint) {
            this.props.onTap();
        }
    },

    handleTouchStart: function (event) {

        this.usingTouch = true;

        if (this.touchStarted) {
            return;
        }

        this.touchStarted = true;

        this.touchMoved = false;
        this.startX = touchX(event);
        this.startY = touchY(event);
    },

    handleTouchMove: function (event) {
        if (! this.touchMoved) {
            var tolerance = this.props.tolerance;

            this.touchMoved = Math.abs(this.startX - touchX(event)) > tolerance ||
                Math.abs(this.startY - touchY(event)) > tolerance;
        }
    },

    handleTouchCancel: function () {
        this.touchStarted = this.touchMoved = false;
        this.startX = this.startY = 0;
    },

    handleTouchEnd: function () {
        this.touchStarted = false;

        if (! this.touchMoved && this.props.onTap) {
            this.props.onTap();
        }
    },

    componentWillMount: function () {
        this.usingTouch = false;
    },


    render: function () {
        var children = this.props.children;
        var element = children ? React.Children.only(children) : <buttion/>;

        return React.cloneElement(element, {
            onClick: this.handleClick,
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
            onTouchCancel: this.handleTouchCancel,
            onTouchEnd: this.handleTouchEnd
        });
    }

});


module.exports = ReactTouchEvents;