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
    
    /* 
    useEffect(fn, []) HOOK  : replicates 'componentDidMount' where :
        'fn' = function to run upon rendering, 
        and [] = array of objects for which the comp will RE-render if and ONLY IF one value HAS CHANGED since previous render
        if none : useEffect() runs once, on 1st mount
    */
    useEffect(()=> {
        
        fetch(myRequest)
            .then(response => {
                if (response.ok) { return response.json() } throw response })
            .then(data => {

                /* limit images size */
                /* data.forEach(item => { 
                    return item.cover=item.cover+`?size=50`; }) */
                    /* console.log(data) */    
                setData(data); })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            })
            .finally(()=> { setLoading(false)})
        }
    , [])
    
    // console.log('DATA==',data);
    if (loading) return 'Loading..';
    if (error) return 'Error!';
    
    return (

        <div className="gallery-wrapper">
            <ul>
                { data.length > 0 ? data.map(i => (
                    <GalleryItem key = {Math.random()} rental= {i} />
                )): loading}
            </ul>
        </div>
    )
}

export default Gallery


   /* adressing issue of gallery images 'content reflow' (due to server's pictures' size and images loading in each child unsynchronously) */
    /* using Promise.all  => not enough : issue does not come from fetching the urls but from browser loading */
    /* const fetchAllImgs = async () => {
        let response = await fetch(myRequest);
        
        if (response.ok) { 
            const jsonResponse = await response.json();
            console.log('jsonResponse==', jsonResponse); // array of objects
            
            let dataImgs = jsonResponse.map( async i => {
                // console.log(i);
                let preFetchData =  await fetch(i.cover);
                return preFetchData;
            })
            let covers = await Promise.all(dataImgs);
            let allUrls = ( await Promise.all(covers)).map(cover => {
                
                return cover = cover.url;
            })
            console.log(allUrls)
            setData(allUrls);
        }
    }
    fetchAllImgs();
    setLoading(false); 
    */



