import React, {Component} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';

// const Two = () => (
// 	<div><h1>2222222222222</h1></div>
// );

class Two extends Component{
	constructor(props) {
        super(props);
    }
	render(){
		return (			
			<div>
				<h1>这个是222</h1>
				<Link to='/one'>go one</Link>
			</div>
		)
	}
}

export default Two;