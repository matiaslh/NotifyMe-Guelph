import React from 'react'
import reactstrap from 'reactstrap'
import { withRouter } from "react-router-dom"

class NoMatch extends React.Component {
    render() {
        return (
            <div>
                404 error
            </div>
        )
    }
}

export default withRouter(NoMatch)
