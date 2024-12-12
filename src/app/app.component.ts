 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  covoiturage = {
    voitureId: 1,
    pointDepart: 'Paris',
    pointArrivee: 'Lyon',
    dateDepart: '2024-08-15',
    heureDepart: '10:00',
    placesDisponibles: 3,
    prix: 25.00
  };
}
