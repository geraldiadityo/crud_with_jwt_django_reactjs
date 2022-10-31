import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import MovieList from "./MovieList";
import AddMoviesModal from "./AddMoviesModal";
import axios from "axios";
import API_URL from "../../constants/Index";
import { Redirect } from "react-router-dom";

class Main extends Component {
    state = {
        movies:[],
    };

    componentDidMount() {
        this.resetState();
    }

    getMovies = () => {
        var token = localStorage.getItem('token');
        if (token){
            axios.get(API_URL,{headers:{Authorization:`JWT ${localStorage.getItem('token')}`}}).then(res => this.setState({
                movies:res.data,
            }));
        }
        else{
            return (<Redirect to="http://localhost:3000"/>)
        }
    };

    resetState = () => {
        this.getMovies();
    };

    render() {
        return (
            <div className="Main">
                <div className="text-center">
                    <h3 className="display-3 text-white bg-secondary">Geraldi LTD - Movie List</h3>
                </div>
                <Container style={{marginTop:"20px"}}>
                    <Row>
                        <Col><MovieList movies={this.state.movies} resetState={this.resetState}/></Col>
                    </Row>
                    <Row>
                        <Col><AddMoviesModal create={true} resetState={this.resetState}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
