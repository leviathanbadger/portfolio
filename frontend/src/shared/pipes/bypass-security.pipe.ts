import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type SafeType = 'html' | 'resource-url' | 'script' | 'style' | 'url';

@Pipe({
  name: 'bypassSecurity'
})
export class BypassSecurityPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string, type: SafeType = 'url') {
    if (!url) return url;
    switch (type) {
    case 'html': return this.sanitizer.bypassSecurityTrustHtml(url);
    case 'resource-url': return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    case 'script': return this.sanitizer.bypassSecurityTrustScript(url);
    case 'style': return this.sanitizer.bypassSecurityTrustStyle(url);
    case 'url': return this.sanitizer.bypassSecurityTrustUrl(url);
    default: throw new Error(`Unknown sanitization type: ${type}`);
    }
  }
}
