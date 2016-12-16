import React from 'react'

class Button extends React.Component{
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	render() {
		return (
			<button className={'xz-btn' + (this.props.type ? (' xz-'+this.props.type) : '')} {...this.props}>
				<span>{this.props.children}</span>
			</button>
		)
	}
}

export default Button;
