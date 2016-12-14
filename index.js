import React from 'React'
import ReactDOM from 'React-dom'
import { Button, Breadcrumb, Steps } from './myReact'

let App = React.createClass({
	getInitialState(){
		return {
			current:0
		}
	},
	stepNext(event) {
		this.setState({current: this.state.current +1});
	},
	stepPrev(event) {
		this.setState({current: this.state.current -1});
	},
	
	render() {
		return <div>
			<div className="col">
				<Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="ghost">Ghost</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="disable">Disable</Button>
			</div>
			<div className="col">
				<Breadcrumb>
				    <Breadcrumb.Item>Home</Breadcrumb.Item>
				    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
				    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
				    <Breadcrumb.Item>An Application</Breadcrumb.Item>
				</Breadcrumb>
				
				<Breadcrumb separator=">">
				    <Breadcrumb.Item>Home</Breadcrumb.Item>
				    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
				    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
				    <Breadcrumb.Item>An Application</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			
			<div className="col">
				<Steps current={2}>
				    <Steps.step title="Finished" description="This is a description." />
				    <Steps.step title="In Progress" description="This is a description." />
				    <Steps.step title="Waiting" description="This is a description." />
				    <Steps.step title="end" description="This is a description." />
				</Steps>
				<Steps current={this.state.current}>
				    <Steps.step title="first" description="This is a description." />
				    <Steps.step title="second" description="This is a description." />
				    <Steps.step title="last" description="This is a description." />
				</Steps>
				{
					this.state.current < 2
					&&
					<Button type="primary" onClick={this.stepNext}>next</Button>
				}
				{
					this.state.current > 0
					&&
					<Button onClick={this.stepPrev}>prev</Button>
				}
			</div>
			
			<div className="col">
				
			</div>
			
		</div>
	}
	
})

ReactDOM.render(
	<App />,
	document.getElementById('App')
);

