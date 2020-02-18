import React, { Component } from 'react';
import Card from "../components/Card/Card"

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true
    
        }
    
    }

    async componentDidMount() {
        const movies = await fetch('../../assets/data.json');
        const moviesJSON = await movies.json();

        if(moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false,
            })
        }
    }
    render() {
        return (
            <div>
                const {data, loading} = this.state;

                {/* if(loading) {
                    return <div>Loading...</div>
                } */}
                return data.map (movie => <Card key={movie.id} movie={movie} />) ;
            </div>
        );
    }
}

export default List;