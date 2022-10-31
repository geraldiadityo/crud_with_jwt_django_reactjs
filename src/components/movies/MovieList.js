import React, { Component } from "react";
import { Table } from "reactstrap";
import AddMoviesModal from "./AddMoviesModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class MovieList extends Component {
    render() {
        const movies = this.props.movies;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Movie Id</th>
                        <th>Movie Name</th>
                        <th>Director</th>
                        <th>Starring</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!movies || movies.length <= 0 ? (
                        <tr>
                            <td colSpan={6} align="center">
                                <b>opps, no one movie here</b>
                            </td>
                        </tr>
                    ) : (
                        movies.map(movie => (
                            <tr key={movie.pk}>
                                <td>{movie.pk}</td>
                                <td>{movie.movie_name}</td>
                                <td>{movie.director}</td>
                                <td>{movie.starring}</td>
                                <td>
                                    <AddMoviesModal create={false} movie={movie} resetState={this.props.resetState}/>
                                    &nbsp;
                                    &nbsp;
                                    <ConfirmRemovalModal pk={movie.pk} resetState={this.props.resetState}/>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default MovieList;