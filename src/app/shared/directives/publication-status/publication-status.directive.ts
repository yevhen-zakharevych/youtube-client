import { Directive, ElementRef, Input, OnInit } from '@angular/core';

enum status {
  week = 'green',
  month = 'blue',
  threeMonth = 'yellow',
  more = 'red'
}

@Directive({
  selector: '[appPublicationStatus]'
})
export class PublicationStatusDirective implements OnInit {

  constructor(private el: ElementRef) {}

  @Input('appPublicationStatus') date!: string;

  ngOnInit(): void {
    const color = this.checkPublicationStatus(this.date);

    // eslint-disable-next-line
    this.el.nativeElement.style.borderBottom = `6px solid ${color}`;
  }

  checkPublicationStatus(date: string): status {
    const diff = this.daysBetween(new Date(date));

    if (diff < 7) {
      return status.week;
    } else if (diff < 30 ) {
      return status.month;
    } else if (diff < 180) {
      return status.threeMonth;
    }

    return status.more;
  }

  daysBetween(second: Date): number {
    const first = new Date();
    const one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    const two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisBetween = one.getTime() - two.getTime();
    const days = millisBetween / millisecondsPerDay;

    return Math.floor(days);
  }
}
