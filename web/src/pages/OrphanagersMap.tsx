import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


import '../styles/pages/orphanagerMap.css';

import mapMakerImg from '../img/2.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id:number;
    latitude: number;
    longetude: number;
    name: string;
}

function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, [])

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Valença</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
                center ={[-22.2424117,-43.7389747]} 
                zoom={13} 
                style={{width:'100%', height:'100%'}}>

                    <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                    {orphanages.map(orphanage => {
                        return(
    
                            <Marker icon={mapIcon} position ={[orphanage.latitude, orphanage.longetude]} key={orphanage.id} >
                                <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'> 
                                        {orphanage.name}
                                    <Link to={`/orphanages/${orphanage.id}`}><FiArrowRight size={20} color="#FFF" /> </Link>
                                </Popup>
                            </Marker>
                        )
                    })}
            </Map>


            <Link to='/orphanages/create' className="create-orphanage" >
                <FiPlus size={32} color="#FFFFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;