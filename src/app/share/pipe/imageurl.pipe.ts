import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  transform(image: any, defaultImage = '/assets/images/place-holder.jpg'): string {
    if (image?.path) {
      const imagePath = image.path.replace('/image/', '/app/public/small/');
      return 'https://apiv1.sszzz.me' + imagePath;
    }
    return defaultImage;
  }
}
