import React, { PropTypes } from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import mixin from 'es6-react-mixins'
import connect from 'alt-connect'
import Actions from './actions'
import Store from './store'

class Component extends mixin(connect(Store)) {
    cancel() {
        Actions.cancel()
    }
    show(title) {
        Actions.show(title)
    }
    sure() {
        Actions.sure(this.refs.input.getValue().trim());
    }
    render () {
        return (
            <Modal
                show={!!this.state.title}
                onHide={this.cancel.bind(this)}
                container={this}
                bsSize='small'
                aria-labelledby='contained-modal-title'
                >
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Input autoFocus placeholder={this.props.placeholder} type={this.props.type} ref='input'/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button bsStyle='info' onClick={this.sure.bind(this)}>
                            {this.props.sure}
                        </Button>
                        <Button bsStyle='danger' onClick={this.cancel.bind(this)}>
                            {this.props.cancel}
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }
}

Component.propTypes = {
    sure: PropTypes.string,
    cancel: PropTypes.string,
    type: PropTypes.oneOf(['text', 'textarea', 'number']),
    placeholder: PropTypes.string
}

export default Component;
