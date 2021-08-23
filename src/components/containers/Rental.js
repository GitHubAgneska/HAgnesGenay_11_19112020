import RentalInfos from '../elements/RentalInfos'
import React, {useEffect, useState, Fragment } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

const Rental =  ({match: {params : {id}}}) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const [mounted, setMounted] = useState(false);
    const [dataRetrieved, setDataRetrieved] = useState(false);

    
    const [ cover, setCover ] = useState();
    const [ title, setTitle ] = useState();
    const [ location, setLocation ] = useState();
    const [ pictures, setPictures ] = useState([]);
    const [ description, setDescription] = useState();
    const [ hostName, setHostName] = useState();
    const [ hostPicture, setHostPicture] = useState();
    const [ rating, setRating] = useState();
    const [ equipments, setEquipment] = useState([]);
    const [ tags, setTags] = useState([]);


    useEffect(()=> {
        fetch(myRequest, {id})
            .then(response => {
                console.log(response.status)
                if (response.ok) { return response.json() } throw response })
            .then(data => {
                let rental = data.filter(rental => rental.id === id )[0]; // ! filter returns ARRAY
                // console.log('rental==', rental);
                if (!rental) { return <Route component={NotFoundPage} />}
                else {
                
                    setCover(rental.cover);
                    setTitle(rental.title);
                    setLocation(rental.location);
                    setPictures(rental.pictures);
                    setDescription(rental.description);
                    setHostName(rental.host.name);
                    setHostPicture(rental.host.picture);
                    setRating(rental.rating);
                    setEquipment(rental.equipments);
                    setTags(rental.tags);

                    setDataRetrieved(true);

                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            })
            .finally(()=> { setLoading(false);})
    }, [id]);

    if (!mounted) { /* meaning data was not retrieved : id in url = incorrect */
        setInterval(() => { <Route component={NotFoundPage} />}, 2000)
    }

    return (
        <Fragment>
            { dataRetrieved && 
                <section className="rentalPage-wrapper page">
                    <RentalInfos {...{cover, title,location, pictures, description, hostName, hostPicture, rating, equipments, tags }} />
                </section> 
            }
            { !dataRetrieved && setInterval(() => { <Route component={NotFoundPage} />}, 2000)
            }


        </Fragment>
    )
}

Rental.propTypes = { match: PropTypes.object.isRequired }

export default Rental