import { Component } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent {
  clearFilters() {
    // Logic to clear all filters
    console.log('Filters cleared');
  }

  onFilterChange(event: any) {
    // Logic to handle filter change
    console.log('Filter changed:', event.target.id);
  }
}
