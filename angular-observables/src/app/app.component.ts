import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-observables';

  ngOnInit(): void {
   let slowObservable = new Observable<number>((o) => {
      let sequence: number[] = [1, 2, 3];
      let timeout: NodeJS.Timeout;

      function getValue(i: number) {
        timeout = setTimeout(() => {
          o.next(sequence[i]);

          if (i === sequence.length - 1) {
            o.complete();
          } else {
            getValue(++i);
          }
        }, 1000)
      }

      getValue(0);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    })

    let observer = {
      next: (x: number) => {
        console.log(x);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed')
      }
    }

    slowObservable.subscribe(observer);
  }
}
