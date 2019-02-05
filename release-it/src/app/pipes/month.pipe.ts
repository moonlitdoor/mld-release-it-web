import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'month'})
export class MonthPipe implements PipeTransform {

    private months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    transform(index: number, offset: number = -1): String {
        return this.months[index + offset];
    }
}