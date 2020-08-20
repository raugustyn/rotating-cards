import React, {Component, Fragment} from 'react'
import "./RotatingCard.css"

class RotatingCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFrontSide: true,
            isMouseOver: false
        }
    }

    switchCardSide() {
        this.setState({showFrontSide: !this.state.showFrontSide})
    }

    onMouseOver(isMouseOver) {
        this.setState({isMouseOver: isMouseOver})
    }

    render() {
        // Normalize caption - no spaces around and no dot at the end
        let caption = this.props.caption.trim()
        if (caption.slice(-1) == '.') {
            caption = caption.slice(0, -1)
        }

        let cardClassName = (this.state.isMouseOver || (!this.state.showFrontSide)) ? "RotatingCard FocusedCard" : "RotatingCard"
        console.log((this.state.isMouseOver || (!this.state.showFrontSide)), cardClassName)
        return (
            <div className={cardClassName}
                 onMouseDown={this.switchCardSide.bind(this)}
                 onMouseOver={this.onMouseOver.bind(this, true)}
                 onMouseLeave={this.onMouseOver.bind(this, false)}
            >
                {
                    this.state.showFrontSide ?
                        <Fragment>
                            <div className="container">
                                <img className="box" src={this.props.backgroundImageSrc}/>
                                <div className="content-box">
                                    {this.state.isMouseOver ?
                                        <Fragment>
                                            <p className="Caption">{caption}</p>
                                            <p>{this.props.description}</p>
                                        </Fragment>
                                        :
                                        <p className="Caption BottomCaption">{caption}</p>
                                    }
                                </div>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <p className="Caption">{this.props.caption}</p>
                            {this.props.details}
                        </Fragment>
                }
            </div>
        )
    }

}

export default RotatingCard
