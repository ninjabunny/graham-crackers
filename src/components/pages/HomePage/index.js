// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { connect } from 'react-redux'

class HomePage extends React.Component {
	componentWillMount() {
		this.props.testDispatch()	
	}
	gram(word){
		let newGran = []
		while(word.length > 3) {
			if(Math.floor(Math.random() * 2)){
				newGran.push(word.slice(0,2))
				word = word.slice(1)
			} else {
				newGran.push(word.slice(0,3))
				word = word.slice(2)
			}
		}
		if(word.length > 0) {
			newGran.push(word)	
		}
		return newGran
		
	}
	shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	shift(word){
		let shift = Math.floor(Math.random() * word.length)
		return word.slice(shift) + word.slice(0, shift)
	}
	render() {
		const { something } = this.props
		let testString = something[Math.floor(Math.random() * something.length)]
		let mod = this.shuffle(this.gram(testString))
		let n = ''
		mod.map(item=>{
			n+=item
		})
		console.log('prfit', n)
		console.log('shfit', this.shift(n))
		console.log(n)
		console.log(testString)
		return (
			<div>Hello World</div>
		)
	}

}

const mapStateToProps = state => ({
	something: state.testReducer,
})

const mapDispatchToProps = dispatch => ({
	testDispatch: _=> dispatch({ type: 'TEST_REDUX' })
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
