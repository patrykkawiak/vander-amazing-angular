import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, modifier: number): string {
    return `${value.substring(0, modifier)}...`;
  }
}
