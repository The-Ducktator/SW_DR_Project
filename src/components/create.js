import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();
       
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeNumbersOfPeople = this.onChangeNumbersOfPeople.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeName(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangeTime(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " " +
            this.state.Poster);

            const newMovie ={
                Title:this.state.Title,
                Year:this.state.Year,
                Poster:this.state.Poster
            };

        axios.post('http://localhost:4000/api/movies', newMovie)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));    

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeDate}></input>
                    </div>
                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangeTime}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}