import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  words: string[] = [];
  transform(message: string): string {
    this.words = message.split(' ');
    for (let i = 0; i < this.words.length; i++)
      this.words[i] = this.words[i][0].toUpperCase() + this.words[i].slice(1);
    return this.words.join(' ');
  }
}
