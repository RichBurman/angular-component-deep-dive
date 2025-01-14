import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-status',
  standalone: true,
  imports: [],
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css'
})
export class ServiceStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999999999

      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
