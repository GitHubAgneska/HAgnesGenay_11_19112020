import React from 'react';
import RentalInfos from '../elements/RentalInfos'
import PropTypes from "prop-types";
import { Route } from 'react-router-dom'
import NotFoundPage from './404'

const apiUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
const myHeaders = new Headers();
const myRequest = new Request( apiUrl, {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
    mode: 'cors', //  mode: 'no-cors' ? 
    cache: 'default',
    credentials: 'include'
});


export default class Rental extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            cover: '',
            title: '',
            location:'',
            pictures:[],
            description: '',
            hostName: '',
            hostPicture: '',
            rating: '',
            equipments: [],
            tags: []
        }
    }

    componentDidMount() {
            fetch(myRequest)
                    .then(response => {
                        if (response.ok) { return response.json() } throw response })
                    .then(data => {
        
                        let rental = data.filter(rental => rental.id === this.state.id )[0]; // ! filter returns ARRAY
                        this.setState({
                            cover: rental.cover,
                            title: rental.title,
                            location: rental.location,
                            pictures: rental.pictures,
                            description: rental.description,
                            hostName: rental.hostName,
                            hostPicture: rental.hostPicture,
                            rating: rental.rating,
                            equipments: rental.equipments,
                            tags: rental.tags,
    
                            loading: true,
                            error: false
                        })
                    })
                    .catch(error => {
                        // console.error('Error fetching data:', error);
                        this.setState({ error: true})
                    })
                    .finally(()=> { this.setState({ loading: false}) })
        
    }

    render() {
        const {cover, title,location, pictures, description, hostName, hostPicture, rating, equipments, tags, error, loading } = this.state;
        return (
        
            error === false?
                <section className="rentalPage-wrapper page">
                    <RentalInfos {...{loading, cover, title,location, pictures, description, hostName, hostPicture, rating, equipments, tags }} /> 
                </section>
            : <Route component={NotFoundPage} />
        )
    }
}

Rental.propTypes = { match: PropTypes.object.isRequired }

