/**
 * Created by jerry on 16/9/5.
 */


const React = require("react");
const PropTypes = React.PropTypes;



function touchX (event) {
    return event.touches [0].clientX;
}

function touchY (event) {
    return event.touches [0].clientY;
}



const ReactTouchEvents = React.createClass({

    propTypes: {
        children: PropTypes.node,
        tapTolerance: PropTypes.number,
        swipeTolerance: PropTypes.number,
        onTap: PropTypes.func,
        onSwipe: PropTypes.func,
        disableClick: PropTypes.bool,
    },

    getDefaultProps: function () {
        return {
            tapTolerance: 10,
            swipeTolerance: 30,
            disableClick: false,
        };
    },

    handleClick: function () {
        if (!this.usingTouch && this.props.onTap) {
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
        this.swipeOutBounded = false;

        this.startX = touchX(event);
        this.startY = touchY(event);

        this.currentX = 0;
        this.currentY = 0;
    },

    handleTouchMove: function (event) {
        this.currentX = touchX(event);
        this.currentY = touchY(event);

        if (! this.touchMoved) {
            const tapTolerance = this.props.tapTolerance;

            this.touchMoved = Math.abs(this.startX - this.currentX) > tapTolerance ||
                Math.abs(this.startY - this.currentY) > tapTolerance;

        } else if (! this.swipeOutBounded) {
            const swipeOutBounded = this.props.swipeTolerance;

            this.swipeOutBounded = Math.abs(this.startX - this.currentX) > swipeOutBounded &&
                Math.abs(this.startY - this.currentY) > swipeOutBounded;

        }
    },

    handleTouchCancel: function () {
        this.touchStarted = this.touchMoved = false;
        this.startX = this.startY = 0;
    },

    handleTouchEnd: function (event) {
        this.touchStarted = false;

        if (! this.touchMoved ) {
            if (this.props.onTap) {
                this.props.onTap(event);
            }

        } else if (! this.swipeOutBounded) {
            if (this.props.onSwipe) {
                let swipeOutBounded = this.props.swipeTolerance,
                    direction;

                if (Math.abs(this.startX - this.currentX) < swipeOutBounded) {
                    direction = this.startY > this.currentY ? "top" : "bottom";

                } else {
                    direction = this.startX > this.currentX ? "left" : "right";
                }

                this.props.onSwipe(direction, event);
            }
        }
    },

    componentWillMount: function () {
        this.usingTouch = false;
    },


    render: function () {
        const children = this.props.children;
        const disableClick = this.props.disableClick;
        const element = children ? React.Children.only(children) : React.createElement("button", null);

        const eventBinding = {
            onClick: this.handleClick,
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
            onTouchCancel: this.handleTouchCancel,
            onTouchEnd: this.handleTouchEnd
        };

        if (disableClick)
            delete eventBinding.onClick;

        return React.cloneElement(element, eventBinding);
    }

});


module.exports = ReactTouchEvents;