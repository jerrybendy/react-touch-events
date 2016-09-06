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
        tapTolerance: PropTypes.number,
        swipeTolerance: PropTypes.number,
        onTap: PropTypes.func,
        onSwipe: PropTypes.func
    },

    getDefaultProps: function () {
        return {
            tapTolerance: 10,
            swipeTolerance: 30
        };
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
            var tapTolerance = this.props.tapTolerance;

            this.touchMoved = Math.abs(this.startX - this.currentX) > tapTolerance ||
                Math.abs(this.startY - this.currentY) > tapTolerance;

        } else if (! this.swipeOutBounded) {
            var swipeOutBounded = this.props.swipeTolerance;

            this.swipeOutBounded = Math.abs(this.startX - this.currentX) > swipeOutBounded &&
                Math.abs(this.startY - this.currentY) > swipeOutBounded;

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

        } else if (! this.swipeOutBounded && this.props.onSwipe){

            var swipeOutBounded = this.props.swipeTolerance,
                direction;

            if (Math.abs(this.startX - this.currentX) < swipeOutBounded) {
                direction = this.startY > this.currentY ? "top" : "bottom";

            } else {
                direction = this.startX > this.currentX ? "left" : "right";
            }

            this.props.onSwipe(direction);
        }
    },

    componentWillMount: function () {
        this.usingTouch = false;
    },


    render: function () {
        var children = this.props.children;
        var element = children ? React.Children.only(children) : <button/>;

        return React.cloneElement(element, {
            onClick: this.handleClick,
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
            onTouchCancel: this.handleTouchCancel,
            onTouchEnd: this.handleTouchEnd
        });
    }

});


export default ReactTouchEvents;