import React from 'React'
import ReactDOM from 'React-dom'
import { Button, Breadcrumb } from './myReact'

let App = React.createClass({
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
		</div>
	}
})

ReactDOM.render(
	<App />,
	document.getElementById('App')
);

