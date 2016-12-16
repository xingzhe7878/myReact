import React from 'react'
import { Button, Breadcrumb, Steps, Tabs, Pagination, Popover, Table } from '../components'

const content = (
  <div>
    <p>Content1</p>
    <p>Content2</p>
  </div>
);

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current:0
		}
	}
	
	stepNext() {
		this.setState({current: (this.state.current +1)});
	}
	
	stepPrev() {
		this.setState({current: (this.state.current -1)});
	}
	
	onChangesome(params) {
		console.log(params)
	}
	
	render() {
		return <div>
			<div className="col">
				<div className="col-title">按钮</div>
				<Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="ghost">Ghost</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="disable">Disable</Button>
			</div>
			
			<div className="col">
				<div className="col-title">面包屑</div>
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
				<div className="col-title">步骤条</div>
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
					<Button type="primary" onClick={this.stepNext.bind(this)}>next</Button>
				}
				{
					this.state.current > 0
					&&
					<Button onClick={this.stepPrev.bind(this)}>prev</Button>
				}
			</div>
			
			<div className="col">
				<div className="col-title">tabs</div>
				<Tabs defaultActiveKey="1">
				    <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
				    <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
				    <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
				</Tabs>
			</div>
			
			<div className="col">
				<div className="col-title">分页</div>
				{/* onChangesome可以是任何函数，返回第一个参数为组件当前状态 */}
				<Pagination defaultCurrent={1} total={50} onChange={this.onChangesome} style={{"marginBottom":"10px"}}/>
				<Pagination defaultCurrent={1} total={150}  />
			</div>
			
			<div className="col">
				<div className="col-title">气泡框</div>
				{/*
				<Popover content={content} title="Title" trigger="hover">
					<Button>Hover me</Button>
			    </Popover>
			    */}
			</div>
			
			<div className="col">
				<div className="col-title">tables</div>
				<Table columns={columns} dataSource={data} />
			</div>
			
		</div>
	}
}

export default App
