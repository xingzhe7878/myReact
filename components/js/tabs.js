import React from 'react'
import ReactDOM from 'react-dom'

class Tabs extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return <div className="xz-tabs">
			<ul className="xz-tabs-bar">
			
			</ul>
			<div>
			
			</div>
		</div>
	}
}

Tabs.TabPane = React.createClass({
	
	render() {
		return (
			<li>{this.props.tab}</li>
		)
	}
});

Tabs.TabContent = React.createClass({
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
});

export default Tabs;