import { Component } from "react";
import {Map, GoogleApiWrapper} from "google-maps-react"



class MapContainer extends Component {


    render() {
        return(
            <Map 
            google = {this.props.google}
            style = {{width:"100%" , height:"100%"}}
            zoom = {10}
            initialCenter = {
                {
                    lat: 25.096073,
                    lng: 85.313118
                }
              
    

             

            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyAx5pDO5XCtHAvoF-bjhsuN12x7RFGOi6o"
})(MapContainer)



