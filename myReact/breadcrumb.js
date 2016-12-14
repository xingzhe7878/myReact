import React from 'React'

export default class Breadcrumb extends React.Component{
	render() {
		return <div className="xz-breadcrumb" >
			{this.props.children}
		</div>
	}
}

Breadcrumb.Item = React.createClass({
	render() {
		return <span>
			<span className="xz-breadcrumb-link">{this.props.children}</span>
			<span className="xz-breadcrumb-separator">/</span>
		</span>
	}
})

