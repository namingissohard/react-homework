import React from 'react';
import ListItem from './ListItem'
import { observer } from 'mobx-react'
@observer
class List extends React.Component {
    render() {
        let arr = this.props.data
        const lists = arr.map((item) => {
            return <ListItem deletefunc={this.props.deletefunc} complete={this.props.complete} status={item.status} content={item.content} itemId={item.id} key={item.id} />
        })
        return <div className="list" ><ul>{lists}</ul></div>
    }
}
export default List;