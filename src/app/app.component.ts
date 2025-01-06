import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServiceStatusComponent } from "./dashboard/service-status/service-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServiceStatusComponent, TrafficComponent, TicketsComponent],
})
export class AppComponent {
  
  
}
