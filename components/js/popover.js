import React from 'react'
import ReactDOM from 'react-dom'

class Popover extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			trigger: this.props.trigger || 'hover', //触发方式
		}
	}
	
	componentDidMount() {
		console.log(ReactDOM.findDOMNode(this.refs.pop))
	}
	
	componentDidUpdate() {
    }
	
	render() {
		return (
			<div>
				<div className="xz-popover" ref="pop">
					<div className="xz-popover-content">
						<div className="xz-popover-arrow">
						</div>
						<div className="xz-popover-inner">
							<div>
								<div className="xz-popover-title">
									{this.props.title}
								</div>
								<div className="xz-popover-inner-content">
									{this.props.content}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
	
}

export default Popover;
