import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(Mile: number, targetUnits: string): any {
    if (!Mile) {
      return;
    }
    switch (targetUnits) {
      case 'km':
        return Mile * 1.6;
      case 'm':
        return Mile * 1.6 * 1000;
      case 'cm':
        return Mile * 1.6 * 1000 * 1000;
      default:
        throw new Error('not supported unit :' + targetUnits);
    }
  }
}
