import alt from './alt'
import Actions from './actions'

class Store {
    constructor() {
        this.title = null
        this.resolve = null
        this.reject = null
        this.bindActions(Actions)
    }
    onShow(data) {
        this.title = data.title
        this.resolve = data.resolve
        this.reject = data.reject
    }
    onSure(value) {
        this.title = null
        this.resolve(value)
    }
    onCancel() {
        this.title = null
        this.reject()
    }
}

export default alt.createStore(Store)
