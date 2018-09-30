import React from 'react';
import { observer } from 'mobx-react'
@observer
class ListItem extends React.Component {

    render() {
        
        return <li className="list-item">
            <input type="checkbox" checked={this.props.status?true:false} onChange={() => { this.props.complete(this.props.itemId, !this.props.status) }} />
            <div>{this.props.content}</div>
            <button onClick={() => this.props.deletefunc(this.props.itemId)}>删除</button></li>
    }
}
export default ListItem;