import React from 'React'
import ReactDOM from 'React-dom'
import { Button, Breadcrumb } from './myReact'

let App = React.createClass({
	render() {
		return <div>
			<Button></Button>
			<Breadcrumb></Breadcrumb>
		</div>
	}
})

ReactDOM.render(
	<App />,
	document.getElementById('App')
);

