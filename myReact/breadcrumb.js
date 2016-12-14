import React from 'React'

export default class Breadcrumb extends React.Component{
	render() {
		return <div className="xz-breadcrumb" >
			{this.props.children.map(function(item, i){
				return (
					<Breadcrumb.Item {...this.props} key={i}>{item.props.children}</Breadcrumb.Item>
				)
			}, this)}
		</div>
	}
}

Breadcrumb.Item = React.createClass({
	render() {
		return <span>
			<span className="xz-breadcrumb-link">{this.props.children}</span>
			<span className="xz-breadcrumb-separator">{this.props.separator?this.props.separator:'/'}</span>
		</span>
	}
})

