const React = require('react');

class Default extends React.Component {
    render(){
        const {logs, title} = this.props
        console.log(this.props)
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/logs">Go to Home Page For logs</a>
                        <a href="/logs/new">Create a New logs</a>
                        { logs? <a href={`/logs/${logs._id}/edit`}> {logs.name} Edit Page </a> : ''}
                        { logs? <a href={`/logs/${logs._id}`}>{logs.name} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default