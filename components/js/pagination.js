import React from 'react'
import ReactDOM from 'react-dom'

class Pagination extends React.Component{
	constructor(props) {
		super(props);
		console.log(this.props)
		this.state={
			defaultCurrent: this.props.defaultCurrent || 1,
			total: this.props.total,
			pageSize: this.props.pageSize || 10
		}
	}
	
	resetHandler() {
		let that = this,
			option;
		for(let i in this.refs) {
			option = ReactDOM.findDOMNode(this.refs[i]);  //巨坑 getDOMNode()
			option.index = this.refs[i].props.index;
			option.onclick = function() {
				that.setState({defaultCurrent:this.index});
			}
		}
	}
	
	componentDidMount() {
		this.resetHandler();
	}
	
	componentDidUpdate() {
        this.resetHandler();
        this.props.onChange(this.state);
    }
	
	renderPageNumber(page, i, current) {
		page.push(<Option className={(current===i+1 ? "xz-pagination-active": '') + " xz-pagination-item"} title={i+1} index={i+1} key={i+1} ref={"p"+(i+1)} />);
	}
	
	render() {
		let page = [];
		let [current, totlePage] = [this.state.defaultCurrent, this.state.total/this.state.pageSize];
		
		if(totlePage > 1) {
			page.push(<Option className={(current===1 ? 'xz-pagination-disabled' : '') + " xz-pagination-prev"} title="上一页" index={(current>1)?(current-1):1} key="prev" ref="prev" />);
			if(totlePage <= 5) {
				for(let i=0; i<totlePage; i++) {
					this.renderPageNumber(page, i, current);
				}
			} else {
				this.renderPageNumber(page, 0, current);
				if(current < 4){
					for(let i=1; i<4; i++) {
						this.renderPageNumber(page, i, current);
					}
					page.push(<li className="xz-pagination-jump-next" key="jumpNext1">...</li>);
				} else if(current < totlePage -2) {
					page.push(<li className="xz-pagination-jump-next" key="jumpNext2">...</li>);
					for(let i = current - 2; i < current + 1; i++){
                        this.renderPageNumber(page, i, current);
                    }
                    page.push(<li className="xz-pagination-jump-next" key="jumpNext3">...</li>);
				} else {
					page.push(<li className="xz-pagination-jump-next" key="jumpNext4">...</li>);
                    for (var i = totlePage - 4; i < totlePage - 1; i++){
                        this.renderPageNumber(page, i, current);
                    }
				}
				this.renderPageNumber(page, totlePage - 1, current);
			}
			
			page.push(<Option className={(current===totlePage ? 'xz-pagination-disabled' : '') + " xz-pagination-next"} title="下一页" index={(current<totlePage)?(current*1+1):totlePage} key="next" ref="next" />);
		}
		
		return (
			<ul className="xz-pagination"  style={this.props.style} >
				{page}
			</ul>
		)
	}
	
};

Option = React.createClass({
	render() {
		return <li className={this.props.className}>
			{this.props.title}
		</li>
	},
});


export default Pagination;
