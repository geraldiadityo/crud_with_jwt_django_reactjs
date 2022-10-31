import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import API_URL from "../../constants/Index";
import { Redirect } from "react-router-dom";

class ConfirmRemovalModal extends Component {
    state = {
        modal:false,
    };

    toggle = () => {
        this.setState(previous => ({
            modal:!previous.modal,
        }));
    };

    deleteMovie = properties => {
        try{
            axios.delete(API_URL + properties.pk + "/", {headers:{Authorization:`JWT ${localStorage.getItem('token')}`}}).then(() => {
                this.props.resetState();
                this.toggle();
            });
        }
        catch(err){
            return (
                <Redirect to="http://localhost:3000/"/>
            );
        }
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>
                    Remove
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Do you really want to delete this movie ?
                    </ModalHeader>
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancel</Button>
                        <Button type="button" onClick={() => this.deleteMovie(this.props)}>Yes</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmRemovalModal;