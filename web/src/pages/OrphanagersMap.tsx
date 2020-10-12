import React from 'react';
import {Link} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanagerMap.css';

import mapMakerImg from '../img/2.svg'

function OrphanagesMap() {
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
            </Map>


            <Link to='/' className="create-orphanage" >
                <FiPlus size={32} color="#FFFFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;