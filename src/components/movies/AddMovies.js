import React, { Component } from "react";
import axios from "axios";
import API_URL from "../../constants/Index";
import { Redirect } from "react-router-dom";


class AddMovies extends Component {
    state = {
        pk: 0,
        movie_name:'',
        director :'',
        starring:'',
    };

    componentDidMount() {
        if (this.props.movie){
            const {pk, movie_name, director, starring} = this.props.movie;
            this.setState({pk,movie_name,director,starring});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    addMovie = (e) => {
        e.preventDefault();
        try {
            axios.post(API_URL, this.state, {headers:{Authorization:`JWT ${localStorage.getItem('token')}`}}).then(() => {
                this.props.resetState();
                this.props.toggle();
            });
        }
        catch{
            return(
                <Redirect to="http://localhost:3000/"/>
            );
        }
    };

    editMovie = (e) => {
        e.preventDefault();
        try{
            axios.put(API_URL + this.state.pk + "/", this.state, {headers:{Authorization:`JWT ${localStorage.getItem('token')}`}}).then(() => {
                this.props.resetState();
                this.props.toggle();
            });
        }
        catch(err){
            return (
                <Redirect to='http://localhost:3000/'/>
            );
        }
    };

    defaultEmpty = (value) => {
        return value === "" ? "" : value;
    };

    render() {
        var btn_name = "Add";
        if (this.props.movie){
            btn_name = "Update";
        }

        return (
            <form onSubmit={this.props.movie ? this.editMovie : this.addMovie} className="needs-validation" noValidate>
                <div className="form-group">
                    <label htmlFor="movie_name">Movie Name</label>
                    <input type="text" className="form-control" name="movie_name" onChange={this.onChange} value={this.defaultEmpty(this.state.movie_name)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="director">Directori</label>
                    <input type="text" className="form-control" name="director" onChange={this.onChange} value={this.defaultEmpty(this.state.director)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="starring">Starring</label>
                    <input type="text" className="form-control" name="starring" onChange={this.onChange} value={this.defaultEmpty(this.state.starring)} required/>
                </div>
                <button type="submit" className="btn btn-primary float-right">{btn_name}</button>
            </form>
        );
    }
}

export default AddMovies;