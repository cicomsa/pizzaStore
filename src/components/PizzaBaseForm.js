import React, {PureComponent} from 'react'
import {connect} from 'react-redux'



class GuessForm extends PureComponent {
	state = {}

 	handleChange = (event) => {

   this.setState({value: event.target.value})
   event.preventDefault()

 	}

	handleSubmit = (e) => {

    e.preventDefault()
		this.props.dispatch(() => this.props.ad_item())
		e.preventDefault()

	}
	render() {

    const initialValue = this.props.initialValue || {}
		return (

			<form onSubmit={this.handleSubmit}>
				<div>
					<input name="checkbox" type="radio" id="checkbox"
          onChange={ this.onChange} />
				</div>

			</form>
		)
	}
}



export default GuessForm
