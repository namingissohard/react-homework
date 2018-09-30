import React, {Component} from 'react'
import { observer } from 'mobx-react'
import listItem from './ListItem'
@observer
class ListView extends Component{
    render() {
        //let arr = this.props.data1
        let data = this.props.data
        return <div className="list">{data}<input type="checkbox"/></div>
    }
}
export default ListView