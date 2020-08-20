import React, {Component} from 'react'
import "./RotatingCard.css"

class RotatingCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFrontSide: true,
            showDetails: true
        }
    }

    render() {
        if (this.state.showFrontSide) {
            return (
                <div className="RotatingCard">
                    <div className="container">
                    <div className="box">
                        <img src={this.props.backgroundImageSrc}/>
                    </div>
                        <div className="box stack-top">
                    <p className="Caption">{this.props.caption}</p>
                    {this.state.showDetails ? this.props.description : null}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="RotatingCard">
                    <p className="Caption">{this.props.caption}</p>
                    {this.props.details}
                </div>
            )
        }
    }

}

export default RotatingCard;
