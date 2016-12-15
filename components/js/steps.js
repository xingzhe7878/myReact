import React from 'react'

class Steps extends React.Component{
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	render() {
		return (
			<div className="xz-steps">
				{this.props.children.map(function(item, i){
					return (
						<Steps.Step {...this.props} {...item.props} num={i} key={i} />
					)
				}, this)}
			</div>
		)
	}
};

Steps.Step = React.createClass({
	getStatus(current, num, len) {
		if(num === len-1) {
			if(current === num) {
				return 'xz-steps-item xz-steps-item-last xz-steps-status-process';
			} else {
				return 'xz-steps-item xz-steps-item-last xz-steps-status-wait';
			}
		} else {
			if(current === num) {
				return 'xz-steps-item xz-steps-status-process';
			}
			if(current > num) {
				return 'xz-steps-item xz-steps-status-finish';
			}
			if(current < num) {
				return 'xz-steps-item xz-steps-status-wait';
			}
		}
	},
	
	
	render() {
		const [current, num, len, title, description] = [this.props.current, this.props.num, this.props.children.length, this.props.title, this.props.description];
		
		return <div className={this.getStatus(current, num, len)}>
			{(num!==(len-1))?<div className="xz-steps-tail"><i></i></div> :''}
			<div className="xz-steps-step">
				<div className="xz-steps-head">
					<div className="xz-steps-head-inner">
						<span className="xz-steps-icon">{num +1}</span>
					</div>
				</div>
				<div className="xz-steps-main">
					<div className="xz-steps-title">{title}</div>
					<div className="xz-steps-description">{description}</div>
				</div>
			</div>
		</div>
	},
});


export default Steps;
