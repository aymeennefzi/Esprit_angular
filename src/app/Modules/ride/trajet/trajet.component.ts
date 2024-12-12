import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent {
  trajet = {
    conducteur_id: '',
    voiture_id: '',
    point_depart: '',
    point_arrivee: '',
    date_depart: '',
    heure_depart: '',
    nombre_places_disponibles: null,
    prix: null
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logique de soumission du formulaire
    console.log(this.trajet);

    // Vous pouvez effectuer d'autres actions comme enregistrer les données ici

    // Naviguer vers la page de détails après la soumission
    this.router.navigate(['/trajet-detail']);
  }
}
