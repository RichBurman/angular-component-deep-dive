import { Component } from '@angular/core';

@Component({
  selector: 'app-service-status',
  standalone: true,
  imports: [],
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css'
})
export class ServiceStatusComponent {
  currentStatus = 'online';

}
