import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
const MapYandex = () => {
    return (
            <YMaps>
                <div className='map'>
                    <Map defaultState={{
                        center: [54.50698270, 36.25487183],
                        zoom: 18
                    }} style={{width: 1200, height: 600}}>
                        <Placemark geometry={[54.506981, 36.254870]}/>
                    </Map>
                </div>
            </YMaps>
    );
};

export default MapYandex;