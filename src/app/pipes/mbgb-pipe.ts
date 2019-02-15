import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'rmbgb'
})
export class MbGbPipe extends DecimalPipe {
  transform(value: number): string {

    const trim = (numStr) => {
      return numStr.replace(/\.0{2}|(\.[1-9])0/,'$1');
    };

    if (!value || isNaN(value)) {
      return '';
    }
    let suffix: string;
    let prefix: string;
    let val: string;
    const pows = [5, 4, 3, 2, 1];
    const suffixes = ['PB', 'TB', 'GB', 'MB', 'KB', 'Bytes'];
    let done: boolean = false;

    if (value === undefined || value === null) {
      return;
    }
    let i: number = 0;
    while (!done && i < suffixes.length - 1) {
      const n: number = (Math.pow(1000, pows[i]) - Math.pow(1000, (pows[i] * - 1)));
      if (value > n) {
        suffix = suffixes[i];
        val = trim(super.transform(value / Math.pow(1000, pows[i]), "1.2-2").toString());
        done = true;
      }
      i++;
    }

    if (value && !val) {
      val = trim(super.transform(value, "1.2-2").toString());
    }
    val += ' ' + (suffix ? suffix : suffixes[suffixes.length - 1]);

    return val;
  }
}
