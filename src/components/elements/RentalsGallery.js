import React, {useEffect, useState } from 'react';
import { GalleryItem } from './GalleryItem'

const apiUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
const myHeaders = new Headers();
const myRequest = new Request( apiUrl, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors', //  mode: 'no-cors' ? 
    cache: 'default',
    credentials: 'include'
});

const Gallery = () =>  {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=> {
        fetch(myRequest)
        .then(response => {
            if (response.ok) { return response.json() } throw response })
        .then(data => { setData(data);/* console.log(data) */ })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError(error);
        })
        .finally(()=> { setLoading(false)})
    }, [])
    
    // console.log('DATA==',data);
    if (loading) return 'Loading..';
    if (error) return 'Error!';
    
    return (
        <div className="gallery-wrapper">
            <ul>
                {data?data.map(i => (
                    <GalleryItem  key = {i.id} rental= {i} />
                )):(loading)}
            </ul>
        </div>
    )
}

export default Gallery

