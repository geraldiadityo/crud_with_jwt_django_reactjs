import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddMovies from "./AddMovies";

class AddMoviesModal extends Component {
    state = {
        modal:false,
    };

    toggle = () => {
        this.setState(previous => ({
            modal:!previous.modal,
        }));
    };

    render() {
        const create = this.props.create;
        var title = "Editing Movie";
        var button = <Button onClick={this.toggle}>Edit</Button>
        if (create){
            title = "Adding Movie";
            button = (
                <Button color="primary" className="float-right" onClick={this.toggle} style={{minWidth:"200px"}}>Add New</Button>
            );
        }
        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <AddMovies resetState={this.props.resetState} toggle={this.toggle} movie={this.props.movie}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default AddMoviesModal;