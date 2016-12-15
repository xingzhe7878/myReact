import React from 'react'

class Tabs extends React.Component{
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	onTabChange(index) {
		console.log(index)
		this.setState({
			defaultActiveKey: index
		})
	}
	
	render() {
		console.log('render')
		return <div className="xz-tabs">
			<ul className="xz-tabs-bar">
			{this.props.children.map(function(item, i){
				return (
					<Tabs.TabPane {...this.props} {...item.props} index={i} key={i} callbackParent={(index) => this.onTabChange(index)}></Tabs.TabPane>
				)
			}, this)}
			</ul>
			<div>
			{this.props.children.map(function(item, i){
				return (
					<Tabs.TabContent {...this.props} {...item.props} key={i}></Tabs.TabContent>
				)
			}, this)}
			</div>
		</div>
	}
}

Tabs.TabPane = React.createClass({
	//默认设置props，优先使用父组件属性,值调用一次
	getDefaultProps() {
		return {
			defaultActiveKey:1
		}
	},
	//实例创建时调用一次，初始化每个实例state
	getInitialState() {
		return {
			defaultActiveKey: this.props.defaultActiveKey,
			index: this.props.index
		}
	},
	
	onTabChange(index) {
		this.props.callbackParent(index)
	},
	
	render() {
		let [defaultActiveKey, index] = [this.state.defaultActiveKey, this.state.index];
		return <li className={((defaultActiveKey-1) === index) ? 'active':''} onClick={() => this.onTabChange(index)}>{this.props.tab}</li>
	}
});

Tabs.TabContent = React.createClass({
	render() {
		return <div>{this.props.children}</div>
	}
});

export default Tabs;