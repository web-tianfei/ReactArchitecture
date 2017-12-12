import React, {Component} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';

class One extends Component{
	constructor(props) {
        super(props);
    }
	render(){
		return (			
			<div>
				<h1>这个是11</h1>
				<Link to='/two'>go two</Link>
			</div>
		)
	}
}

// const One = () => (
// 	<div><h1>111111111111</h1></div>
// );

export default One;