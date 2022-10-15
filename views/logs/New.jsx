const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Log">
            <form method="POST" action="/logs">
                Name: <input type="text" name="title" placeholder='Name of Log Here'></input><br/>
                Entry: <input type="text" name="entry" placeholder='Type of Log Here'></input><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New