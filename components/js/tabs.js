import React from 'react'
import ReactDOM from 'react-dom'

class Tabs extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			defaultActiveKey: this.props.defaultActiveKey || 1,
			children: this.props.children
		}
	}
	
	componentDidMount() {
		this.resetHandler();
	}
	
	componentDidUpdate() {
		this.resetHandler();
    }
	
	resetHandler() {
		let that = this,
			option;
		for(let i in this.refs) {
			option = ReactDOM.findDOMNode(this.refs[i]);  //巨坑 getDOMNode()
			option.index = this.refs[i].props.index;
			option.onclick = function() {
				that.setState({defaultActiveKey:this.index});
			}
		}
	}
	
	renderTabPane(tabpane, i, defaultActiveKey) {
		let _children = this.state.children;
		let _key = _children[i].key;
		tabpane.push(<Tabs.TabPane className={(_key === defaultActiveKey ? "xz-tabs-active": '' ) + " xz-tabs-tab"} tab={_children[i].props.tab} index={_key} ref={"tab" + _key} key={_key} />);
	}
	
	renderTabContent(tabContent, i, defaultActiveKey) {
		let _children = this.state.children;
		let _key = _children[i].key;
		tabContent.push(<Tabs.TabContent className={(_key === defaultActiveKey ? "xz-tabs-tabpane-acvive": '' ) + " xz-tabs-tabpane"} key={_key}>{_children[i].props.children}</Tabs.TabContent>);
	}
	
	render() {
		let that = this;
		let tabpane = [];
		let tabContent = [];
		let [len, defaultActiveKey] = [this.state.children.length, this.state.defaultActiveKey];
		
		for(let i=0; i<len; i++) {
			this.renderTabPane(tabpane, i, defaultActiveKey);
			this.renderTabContent(tabContent, i, defaultActiveKey);
		}
		
		return (
			<div className="xz-tabs">
				<ul className="xz-tabs-bar">
					{tabpane}
				</ul>
				<div className="xz-tabs-content">
					{tabContent}
				</div>
			</div>
		)
	}
}

Tabs.TabPane = React.createClass({
	getInitialState(){
		return {
		}
	},
	
	render() {
		return (
			<li className={this.props.className}>{this.props.tab}</li>
		)
	}
});

Tabs.TabContent = React.createClass({
	render() {
		return (
			<div className={this.props.className}>{this.props.children}</div>
		)
	}
});

export default Tabs;