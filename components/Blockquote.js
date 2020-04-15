import React, { Component } from 'react'

class BlockQuote extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            ref: React.createRef(),
            el: null,
            hover: false,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.setState({el: this.state.ref.current})
        setTimeout(() => {
            if(this.state.el) {
                this.calculatePosition();
                this.attachEventsListener();
            }
        }, 100)
    }

    componentWillUnmount() {
        console.log('in')
        window.removeEventListener('mousemove', this.onMouseMove)
        window.removeEventListener('resize', this.calculatePosition)
        window.removeEventListener('scroll', this.calculatePosition)
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e))
        window.addEventListener('resize', e => this.calculatePosition(e))
        window.addEventListener('scroll', e => this.calculatePosition(e))
    }

    calculatePosition() {
        TweenMax.set(this.state.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.state.el.getBoundingClientRect();
        const x = box.left + (box.width * 0.5);
        const y = box.top + (box.height * 0.5);
        const width = box.width;
        const height = box.height;
        this.setState({x, y, width, height})
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.state.hover ? 0.7 : 0.5);
        let x = e.clientX - this.state.x;
        let y = e.clientY - this.state.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < (this.state.width * hoverArea)) {
            hover = true;
            if (!this.state.hover) {
                this.setState({hover: true})
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.state.hover) {
            this.onLeave();
            this.setState({hover: false})
        }
    }

    onHover(x, y) {
        TweenMax.to(this.state.el, 0.4, {
            x: (x - this.state.x) * 0.4,
            y: (y - this.state.y) * 0.4,
            scale: 1.2,
            ease: Power2.easeOut
        });
        let el = this.state.el
        el.style.zIndex = 10;
        this.setState({el})
    }

    onLeave() {
        TweenMax.to(this.state.el, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            ease: Elastic.easeOut.config(1.2, 0.4)
        });
        let el = this.state.el
        el.style.zIndex = 1;
        this.setState({el})
    }

    render() {
        return (
            <blockquote ref={this.state.ref}>{this.props.citationJap} <br/> "{this.props.citationTrad}"</blockquote>
        )
    }
}

export default BlockQuote