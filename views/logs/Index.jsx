const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {log} = this.props
        return(
            <Default title="Log Index Page">
                <ul>
                    {
                        log.map((logs) => {
                            const {title, entry, shipIsBroken, _id} = logs
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}>
                                    {title} is {entry}</a>
                                    
                                     <br/>
                                    {
                                        shipIsBroken? 
                                        'It\'s broken':
                                        'It\'s not broken'
                                    }
                                    <br/>
                                    <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${entry} ${title}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index