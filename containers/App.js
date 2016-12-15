import React from 'React'
import { Button, Breadcrumb, Steps, Tabs } from '../components'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current:0
		}
	}
	
	stepNext(event) {
		this.setState({current: this.state.current +1});
	}
	
	stepPrev(event) {
		this.setState({current: this.state.current -1});
	}
	
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
				    <Steps.Step title="Finished" description="This is a description." />
				    <Steps.Step title="In Progress" description="This is a description." />
				    <Steps.Step title="Waiting" description="This is a description." />
				    <Steps.Step title="end" description="This is a description." />
				</Steps>
				<Steps current={this.state.current}>
				    <Steps.Step title="first" description="This is a description." />
				    <Steps.Step title="second" description="This is a description." />
				    <Steps.Step title="last" description="This is a description." />
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
				<Tabs>
				    <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
				    <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
				    <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
				</Tabs>
			</div>
			
		</div>
	}
}

export default App
