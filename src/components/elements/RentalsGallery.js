import React from 'react';
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

export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            localdata: [],
            loading: true,
            error: null
        }
    }
    componentDidMount() {
        fetch(myRequest)
            .then(response => {
                if (response.ok) { return response.json() } throw response })
            .then(data => {
                this.setState({localdata:data}); })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({error:error});
            })
            .finally(()=> { this.setState({loading:false})})
    }

    render() {
        return (
            <div className="gallery-wrapper">
                <ul>
                    { this.state.localdata.length > 0 ? this.state.localdata.map(i => (
                        <GalleryItem key = {Math.random()} rental= {i} />
                    )): this.state.loading}
                </ul>
            </div>
        )
    }
}





