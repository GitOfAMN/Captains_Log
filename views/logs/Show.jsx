const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        console.log(this.props)
        const {title, entry, shipIsBroken, _id} = this.props.log
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
        <Default title={`${capName} Show Page`} logs={this.props.log}>
            {entry}
            <p>{capName} and {shipIsBroken? 'it\'s broken': 'it\'s not broken'}</p>
        </Default>
        )
   } 
}

module.exports = Show