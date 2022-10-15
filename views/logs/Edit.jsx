const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.logs
        return (
            <Default title={`${title} Edit Page`} logs={this.props.logs}>
                <form method="POST" action={`/log/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={title}></input><br/>
                    Entry: <input type="text"></input><br />
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}/> <br />
                    <input type="submit" value="Edit Log" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit