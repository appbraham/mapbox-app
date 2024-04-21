import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiYWJyYWhhbWZ4IiwiYSI6ImNrMWh5aW9xdzBmdTkzaHRmNGx6dHoydTEifQ.Lb25UpT7aCIgknr7zMkULw';


if ( !navigator.geolocation ){
  const message = 'Navegador no soporta la Geolocalización.'

  alert(message);
  throw new Error(message);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
