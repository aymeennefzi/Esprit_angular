import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trajet-detail',
  templateUrl: './trajet-detail.component.html',
  styleUrls: ['./trajet-detail.component.css']
})
export class TrajetDetailComponent implements OnInit {
  covoiturages = [
    {
      voitureId: '001',
      pointDepart: 'Tunis',
      pointArrivee: 'Ariana',
      dateDepart: '2024-09-15',
      heureDepart: '08:00',
      placesDisponibles: 3,
      prix: 50
    },
    {
      voitureId: '002',
      pointDepart: 'esprit',
      pointArrivee: 'lac1',
      dateDepart: '2024-09-16',
      heureDepart: '09:00',
      placesDisponibles: 2,
      prix: 30
    },
    // Ajoutez autant de covoiturages que nécessaire
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
