import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-status',
  standalone: true,
  imports: [],
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css',
})
export class ServiceStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; 
  private destoryRef = inject(DestroyRef);
  constructor() {}

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999999999

      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destoryRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
