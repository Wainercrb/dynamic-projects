import { Directive } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  host: { '[style.border-left]': '"4px solid #c44335"', '[style.padding-left]': '"1rem"' },
})
export class Highlight {}
