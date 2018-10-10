
import { computed, observable, action } from "mobx";

class List {
  @observable wallData = [{
    name: "chico",
    content: "23333",
    time: "2018-10-8",
  }]
  @observable data = []
  @computed get finished() {
    return this.data.filter((item) => {
      return item.status === 1
    }).length
  }
  @action update(x) {
    this.data = x
  }
  @action delete(id) {
    this.data.splice(id, 1)
  }

  @action updateWallData(data){
    this.wallData = data 
  }
}

export default new List()