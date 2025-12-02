// In your safe-url-pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true // Or whatever setting you are using
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string | undefined): SafeUrl {
    if (value) {
      // The YouTube API often returns a 'watch?v=' URL. 
      // iFrames need an 'embed/' URL.
      const embedUrl = value.replace('watch?v=', 'embed/').replace('&feature=youtu.be', '');
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
    return ''; // Return an empty string or default safe URL if value is undefined
  }
}