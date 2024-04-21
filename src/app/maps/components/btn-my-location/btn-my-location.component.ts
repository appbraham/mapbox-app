import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(
    private placesServices: PlacesService,
    private mapService:MapService
  ){}

  goToMyLocation(){
    if( !this.placesServices.isUserLocationReady ) throw Error('No hay ubicación de usuario');
    if( !this.mapService.isMapReady ) throw Error('No hay mapa disponible');

    console.log('Ir a mi ubicación');
    this.mapService.flyto( this.placesServices.userLocation! );
  }

}
