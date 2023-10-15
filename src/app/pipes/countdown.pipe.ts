import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {
  private subscription!: Subscription;

  transform(seconds: number): string {
    if (!seconds || isNaN(seconds) || seconds < 0) {
      return '00:00';
    }

    let minutes = '' + Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    }

    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return `${minutes}:${formattedSeconds}`;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
