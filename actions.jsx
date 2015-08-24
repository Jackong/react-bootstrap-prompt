import alt from './alt'

class Actions {
    show(title) {
        return new Promise((resolve, reject) => {
            this.dispatch({title: title, resolve: resolve, reject: reject})
        })
    }
    sure(value) {
        this.dispatch(value)
    }
    cancel() {
        this.dispatch()
    }
}

export default alt.createActions(Actions)
