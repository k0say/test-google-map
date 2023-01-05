import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker, MapMarkerClusterer } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { TestScheduler } from 'rxjs/testing';
import { stations } from './map/data';

interface VehicleTrackingMap {
  id?: number;
  typeId?: number;
  vehicleModel?: string;
  vehicleCategory?: string;
  visualId?: string;
  latitude?: number;
  longitude?: number;
  isOn?: boolean;
  stateOfCharge?: number;
  isLinked?: boolean;
  address?: string;
  title?: string;
  info?: string;
  label?: {
    color: string,
    text: number,
  },
  position: {
    lat: number;
    lng: number;
  };
  options?: {
    animation?: google.maps.Animation;
    icon?: {
      url?: string;
      scaledSize?: google.maps.Size;
      origin?: google.maps.Point;
      anchor?: google.maps.Point;
    };
  };
}


const maxLat = (Math.atan(Math.sinh(Math.PI)) * 180) / Math.PI;

export let MAP_CONFIG = {
  width: '100%',
  height: '650px',
  zoom: 12,
  options: {
    scrollwheel: true,
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    keyboardShortcuts: false,
    minZoom: 3,
    maxZoom: 22,
    restriction: {
      latLngBounds: { north: maxLat, south: -maxLat, west: -180, east: 180 },
      strictBounds: true,
    },
  } as google.maps.MapOptions,
  imageClusterer: '',
  clusterClass: 'cluster',
  clusterStyles: [
    {
      width: 20,
      height: 20,
      className: 'cluster-1',
    },
    {
      width: 30,
      height: 30,
      className: 'cluster-2',
    },
    {
      width: 40,
      height: 40,
      className: 'cluster-3',
    },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-google-maps-app';

  @ViewChild('myGoogleMap', { static: false }) map: any;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild('cluster', { static: false }) clusterer: MapMarkerClusterer;
  @ViewChild('marker', { static: false }) marker: MarkerClusterer;

  center: google.maps.LatLngLiteral = { lat: 41.060691, lng: 17.064461 };
  zoom = 12;
  // markerPositions: google.maps.LatLngLiteral[] = [];
  markers: any [] = [];
  markerClustererImagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  googleOptions = MAP_CONFIG.options;
  clusterClass = MAP_CONFIG.clusterClass;
  clusterStyles = MAP_CONFIG.clusterStyles;
  // addMarker(event: google.maps.MapMouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }

  ngOnInit() {

    this.markers.push(
      { 
        position: { 
          lat: -31.563910, 
          lng: 147.154312 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -33.718234, 
          lng: 150.363181 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -33.727111, 
          lng: 150.371124 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -33.848588, 
          lng: 151.209834 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -33.851702, 
          lng: 151.216968 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -34.671264, 
          lng: 150.863657 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -35.304724, 
          lng: 148.662905 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -36.817685, 
          lng: 175.699196 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -36.828611, 
          lng: 175.790222 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.750000, 
          lng: 145.116667 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.759859, 
          lng: 145.128708 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.765015, 
          lng: 145.133858 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.770104, 
          lng: 145.143299 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.773700, 
          lng: 145.145187 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.774785, 
          lng: 145.137978 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -37.819616, 
          lng: 144.968119 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -38.330766, 
          lng: 144.695692 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -39.927193, 
          lng: 175.053218 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -41.330162, 
          lng: 174.865694 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -42.734358, 
          lng: 147.439506 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -42.734358, 
          lng: 147.501315 
        },
        asd: 'test'
      },
      { 
        position: { 
          lat: -42.735258, 
          lng: 147.438000 
        },
        asd: 'test'
      },
      { position: { lat: -43.999792, lng: 170.463352 } }
    )

    // stations.forEach(item => {
    // item.data.stations.forEach(s => {
    //   return this.markers.push({
    //     position: {
    //       lat: s.lat,
    //       lng: s.lon,
    //     },
    //     label: {
    //       color: 'blue',
    //       text: s.post_code,
    //     },
    //     title: s.address,
    //     info: 'Marker info ' + (this.markers.length + 1),
    //     options: {
    //       animation: google.maps.Animation.DROP,
    //     },
    //   }
    //   );
    // })
    // })

  }
  public test(e) {
    console.log(e)
  }

//   // Get the marker cluster object
// let markerCluster = new MarkerClusterer(map, markers, {});

// // Get the markers in the cluster
// let clusterMarkers = markerCluster.getMarkers();

// // Iterate over the markers and do something with each marker
// clusterMarkers.forEach(marker => {
//   console.log(marker.getPosition());
// });

  openInfoCard(mapCluster: any, mapMarker?: MapMarker): void {
    if (mapCluster) {
      // console.log(this.clusterer.markerClusterer.getMarkers())
      const data = mapCluster.getMarkers();
      data.forEach(x => {
        console.log(x.getPosition());
      })
      console.log(data);
    }

    if (mapMarker) {
      // this.isClusterInfo = false;
      // this.mapInfoContent = marker;
      // this.center = marker.position;
    }

    // this.mapInfoWindow.open(mapMarker);
  }

}
