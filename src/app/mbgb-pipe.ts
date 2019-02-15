import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'mbgb'
})
export class MbGbPipe extends DecimalPipe {
  transform(value: number): any {
    let suffix: string;
    if (value > 1000000000) { // greater than a billion (GB)
      value = value / 1000000000;
      suffix = "GB";
    }
    else { // if not greater than a billion, use millions (MB)
      value = value / 1000000;
      suffix = "MB";
    }

    return super.transform(value, "1.2-2") + ' ' + suffix;
  }
}
