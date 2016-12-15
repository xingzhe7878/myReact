import React from 'React'

class Breadcrumb extends React.Component{
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	render() {
		return (
			<div className="xz-breadcrumb" >
				{this.props.children.map(function(item, i){
					return (
						<Breadcrumb.Item {...this.props} {...item.props} key={i}></Breadcrumb.Item>
					)
				}, this)}
			</div>
		)
	}
}

Breadcrumb.Item = React.createClass({
	render() {
		return (
			<span>
				<span className="xz-breadcrumb-link">{this.props.children}</span>
				<span className="xz-breadcrumb-separator">{this.props.separator?this.props.separator:'/'}</span>
			</span>
		)
	}
})




export default Breadcrumb
