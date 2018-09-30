
import { computed, observable, action } from "mobx";

class List {
  @observable data = []
  @computed get finished() {
    return this.data.filter((item) => {
      return item.status != false
    }).length
  }
  @action update(x) {
    this.data = x
  }
  @action delete(id) {
    this.data.splice(id, 1)
  }
}

export default new List()