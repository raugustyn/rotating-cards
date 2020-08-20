import React, {Component, Fragment} from 'react'
import "./RotatingCard.css"

class RotatingCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFrontSide: true,
            showDetails: true
        }
    }

    switchCardSide() {
        this.setState({showFrontSide: !this.state.showFrontSide})
    }

    render() {
        return (
            <div className="RotatingCard" onMouseDown={this.switchCardSide.bind(this)}>
                {
                    this.state.showFrontSide ?
                        <Fragment>
                            <div className="container">
                                <div className="box">
                                    <img src={this.props.backgroundImageSrc}/>
                                </div>
                                <div className="box stack-top">
                                    <p className="Caption">{this.props.caption}</p>
                                    {this.state.showDetails ? this.props.description : null}
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

export default RotatingCard;
