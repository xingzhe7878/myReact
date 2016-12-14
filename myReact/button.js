import React from 'React'

export default class Button extends React.Component{
	render() {
		return <button className={'xz-btn' + (this.props.type ? (' xz-'+this.props.type) : '')}>
			<span>{this.props.children}</span>
		</button>
	}
}
