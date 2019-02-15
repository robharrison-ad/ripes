// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: "robsOrderBy"
// })

// export class RobsOrderByPipe implements PipeTransform {
//   transform(values: number[]|string[]|object[], key?: string, reverse?: boolean) {
//     if (!Array.isArray(values) || values.length <= 0) {
//       return null;
//     }

//     return this.sort(values, key, reverse);
//   }

//   private sort(value: any[], key?: any, reverse?: boolean): any[] {
//     const isInside = key && key.indexOf('.') !== -1;

//     if (isInside) {
//       key = key.split('.');
//     }

//     const array: any[] = value.sort((a: any, b: any): number => {
//       if (!key) {
//         return a > b ? 1 : -1;
//       }

//       if (!isInside) {
//         return a[key] > b[key] ? 1 : -1;
//       }

//       return this.getValue(a, key) > this.getValue(b, key) ? 1 : -1;
//     });

//     if (reverse) {
//       return array.reverse();
//     }

//     return array;
//   }

//   private getValue(object: any, key: string[]) {
//     for (let i = 0, n = key.length; i < n; ++i) {
//       const k = key[i];
//       if (!(k in object)) {
//         return;
//       }

//       object = object[k];
//     }

//     return object;
//   }

// }
// export class RobsOrderByPipe implements PipeTransform {
//   transform(array: any[], field: any) {
//     let reverse = false;
//     let fields = [];
//     if (field.charAt(0) === "-") {
//       reverse = true;
//       field = field.replace("-", "");
//     }
//     if (field.indexOf(".") > -1) {
//       field = field.split(".");
//     }
//     if (!reverse) {
//       array.sort((a: any, b: any) => {
//         if (a[field] > b[field]) {
//           return 1;
//         } else if (a[field] < b[field]) {
//           return -1;
//         } else {
//           return 0;
//         }
//       });
//     }
//     else {
//       array = array.reverse();
//     }
//     return array;
//   }
// }
