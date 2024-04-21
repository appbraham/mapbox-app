import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  // Agregagos type node en el tsconfig.app.json y en tsconfig.json
  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService:PlacesService){}

  onQueryChange( query: string = '' ){

    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );

    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery( query );

    }, 350);

  }

}
