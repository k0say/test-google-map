import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker, MapMarkerClusterer } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { TestScheduler } from 'rxjs/testing';
import { stations } from './map/data';


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
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'angular-google-maps-app';

  @ViewChild('myGoogleMap', { static: false }) map!: any;
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

  // markerCluster = new MarkerClusterer({map: this.map, markers: this.markers});

  ngAfterViewInit(): void {
    this.clusterer.clusterClick.subscribe(x => console.log(x.getMarkers()))
  }

  ngOnInit() {

    stations.forEach(item => {
      item.data.stations.forEach(s => {
        return this.markers.push({
          position: {
            lat: s.lat,
            lng: s.lon,
          },
          label: {
            color: 'blue',
            text: s.post_code,
          },
          title: s.address,
          info: 'Marker info ' + (this.markers.length + 1),
          options: {
            asd: 'asd',
            animation: google.maps.Animation.DROP,
          },
        }
        );
      })
    })
    
  }
  public test(e) {
    console.log(e)
  }

  openInfoCard(mapCluster: any, mapMarker?: MapMarker): void {
    console.log(mapCluster)
  }

}
