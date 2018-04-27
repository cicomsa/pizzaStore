import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {CHECKBOX} from '../actions/checkbox'


class GuessForm extends PureComponent {
	state = {}

 	handleChange = (event) => {

   this.setState({value: event.target.value})
   event.preventDefault()

 	}

	handleSubmit = (e) => {

    e.preventDefault()
		this.props.dispatch({type:CHECKBOX, payload: this.state.value})
		e.preventDefault()

	}
	render() {

    const initialValue = this.props.initialValue || {}
		return (

			<form onSubmit={this.handleSubmit}>
				<div>
					<input name="button" type="checkbox" id="button" value={
						this.state.value || initialValue.value || ''
					} onChange={ this.handleChange } />
				</div>
			</form>
		)
	}
}

const mapStateToProps = function(state) {
  return console.log({
    checkbox: state.checkbox,
  })
}

export default connect (mapStateToProps)(GuessForm)
