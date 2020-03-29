import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from 'ngx-gallery';
import { Gallery, GalleryRef } from '@ngx-gallery/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  galleryId = 'mixedExample';
  galleryIdVideo = 'videoExample';

  constructor(private gallery: Gallery, private VIDEOgallery: Gallery) {}

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    const galleryVideo: GalleryRef = this.VIDEOgallery.ref(this.galleryIdVideo);

    /*GALERIA DE IMAGENES NUEVAS*/

    /* #region IMAGENES NUEVAS*/
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/1.jpeg',
      thumb: 'assets/img/spirit/galeria2020/1.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/2.jpeg',
      thumb: 'assets/img/spirit/galeria2020/2.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/3.jpeg',
      thumb: 'assets/img/spirit/galeria2020/3.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/4.jpeg',
      thumb: 'assets/img/spirit/galeria2020/4.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/5.jpeg',
      thumb: 'assets/img/spirit/galeria2020/5.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/6.jpeg',
      thumb: 'assets/img/spirit/galeria2020/6.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/7.jpeg',
      thumb: 'assets/img/spirit/galeria2020/7.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/8.jpeg',
      thumb: 'assets/img/spirit/galeria2020/8.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/9.jpeg',
      thumb: 'assets/img/spirit/galeria2020/9.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/10.jpeg',
      thumb: 'assets/img/spirit/galeria2020/10.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/11.jpeg',
      thumb: 'assets/img/spirit/galeria2020/11.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/12.jpeg',
      thumb: 'assets/img/spirit/galeria2020/12.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/13.jpeg',
      thumb: 'assets/img/spirit/galeria2020/13.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/14.jpeg',
      thumb: 'assets/img/spirit/galeria2020/14.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/15.jpeg',
      thumb: 'assets/img/spirit/galeria2020/15.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/16.jpeg',
      thumb: 'assets/img/spirit/galeria2020/16.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/17.jpeg',
      thumb: 'assets/img/spirit/galeria2020/17.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/18.jpeg',
      thumb: 'assets/img/spirit/galeria2020/18.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/19.jpeg',
      thumb: 'assets/img/spirit/galeria2020/19.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/20.jpeg',
      thumb: 'assets/img/spirit/galeria2020/20.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/21.jpeg',
      thumb: 'assets/img/spirit/galeria2020/21.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/22.jpeg',
      thumb: 'assets/img/spirit/galeria2020/22.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/23.jpeg',
      thumb: 'assets/img/spirit/galeria2020/23.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/24.jpeg',
      thumb: 'assets/img/spirit/galeria2020/24.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/25.jpeg',
      thumb: 'assets/img/spirit/galeria2020/25.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/26.jpeg',
      thumb: 'assets/img/spirit/galeria2020/26.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/27.jpeg',
      thumb: 'assets/img/spirit/galeria2020/27.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/28.jpeg',
      thumb: 'assets/img/spirit/galeria2020/28.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/29.jpeg',
      thumb: 'assets/img/spirit/galeria2020/29.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/30.jpeg',
      thumb: 'assets/img/spirit/galeria2020/30.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/31.jpeg',
      thumb: 'assets/img/spirit/galeria2020/31.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/32.jpeg',
      thumb: 'assets/img/spirit/galeria2020/32.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/33.jpeg',
      thumb: 'assets/img/spirit/galeria2020/33.jpeg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria2020/34.jpeg',
      thumb: 'assets/img/spirit/galeria2020/34.jpeg',
      title: 'Some title',
    });
    /* #end region */

    /*IMAGENES VIEJAS */
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/1.jpg',
      thumb: 'assets/img/spirit/galeria/1.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/2.jpg',
      thumb: 'assets/img/spirit/galeria/2.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/3.jpg',
      thumb: 'assets/img/spirit/galeria/3.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/4.jpg',
      thumb: 'assets/img/spirit/galeria/4.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/5.jpg',
      thumb: 'assets/img/spirit/galeria/5.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/6.jpg',
      thumb: 'assets/img/spirit/galeria/6.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/7.jpg',
      thumb: 'assets/img/spirit/galeria/7.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/8.jpg',
      thumb: 'assets/img/spirit/galeria/8.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/9.jpg',
      thumb: 'assets/img/spirit/galeria/9.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/10.jpg',
      thumb: 'assets/img/spirit/galeria/10.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/11.jpg',
      thumb: 'assets/img/spirit/galeria/11.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/12.jpg',
      thumb: 'assets/img/spirit/galeria/12.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/13.jpg',
      thumb: 'assets/img/spirit/galeria/13.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/14.jpg',
      thumb: 'assets/img/spirit/galeria/14.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/15.jpg',
      thumb: 'assets/img/spirit/galeria/15.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/16.jpg',
      thumb: 'assets/img/spirit/galeria/16.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/17.jpg',
      thumb: 'assets/img/spirit/galeria/17.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/18.jpg',
      thumb: 'assets/img/spirit/galeria/18.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/19.jpg',
      thumb: 'assets/img/spirit/galeria/19.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/20.jpg',
      thumb: 'assets/img/spirit/galeria/20.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/21.jpg',
      thumb: 'assets/img/spirit/galeria/21.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/22.jpg',
      thumb: 'assets/img/spirit/galeria/22.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/23.jpg',
      thumb: 'assets/img/spirit/galeria/23.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/24.jpg',
      thumb: 'assets/img/spirit/galeria/24.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/25.jpg',
      thumb: 'assets/img/spirit/galeria/25.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/26.jpg',
      thumb: 'assets/img/spirit/galeria/26.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/27.jpg',
      thumb: 'assets/img/spirit/galeria/27.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/28.jpg',
      thumb: 'assets/img/spirit/galeria/28.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/29.jpg',
      thumb: 'assets/img/spirit/galeria/29.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/30.jpg',
      thumb: 'assets/img/spirit/galeria/30.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/31.jpg',
      thumb: 'assets/img/spirit/galeria/31.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/32.jpg',
      thumb: 'assets/img/spirit/galeria/32.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/33.jpg',
      thumb: 'assets/img/spirit/galeria/33.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/34.jpg',
      thumb: 'assets/img/spirit/galeria/34.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/35.jpg',
      thumb: 'assets/img/spirit/galeria/35.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/36.jpg',
      thumb: 'assets/img/spirit/galeria/36.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/37.jpg',
      thumb: 'assets/img/spirit/galeria/37.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/38.jpg',
      thumb: 'assets/img/spirit/galeria/38.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/39.jpg',
      thumb: 'assets/img/spirit/galeria/39.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/40.jpg',
      thumb: 'assets/img/spirit/galeria/40.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/41.jpg',
      thumb: 'assets/img/spirit/galeria/41.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/42.jpg',
      thumb: 'assets/img/spirit/galeria/42.jpg',
      title: 'Some title',
    });
    galleryRef.addImage({
      src: 'assets/img/spirit/galeria/43.jpg',
      thumb: 'assets/img/spirit/galeria/43.jpg',
      title: 'Some title',
    });

    /*GALERIA DE VIDEOS */
    galleryVideo.addVideo({
      src: 'assets/video/1.mp4',
      thumb: 'assets/video/1.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/18.mp4',
      thumb: 'assets/video/18.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/19.mp4',
      thumb: 'assets/video/19.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/2.mp4',
      thumb: 'assets/video/2.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/3.mp4',
      thumb: 'assets/video/3.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/4.mp4',
      thumb: 'assets/video/4.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/5.mp4',
      thumb: 'assets/video/5.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/6.mp4',
      thumb: 'assets/video/6.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/7.mp4',
      thumb: 'assets/video/7.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/8.mp4',
      thumb: 'assets/video/8.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/9.mp4',
      thumb: 'assets/video/9.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/10.mp4',
      thumb: 'assets/video/10.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/11.mp4',
      thumb: 'assets/video/11.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/12.mp4',
      thumb: 'assets/video/12.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/13.mp4',
      thumb: 'assets/video/13.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/14.mp4',
      thumb: 'assets/video/14.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/15.mp4',
      thumb: 'assets/video/15.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/16.mp4',
      thumb: 'assets/video/16.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });
    galleryVideo.addVideo({
      src: 'assets/video/17.mp4',
      thumb: 'assets/video/17.jpg',
      poster: '(OPTIONAL)VIDEO_POSTER_URL',
    });

    this.galleryOptions = [
      {
        width: '720px',
        height: '480px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewForceFullscreen: true,
      },
      // max-width 800
      {
        breakpoint: 720,
        width: '80%',
        height: '720px',
        fullWidth: false,
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true,
      },
    ];
    this.galleryImages = [
      {
        small: 'assets/img/spirit/galeria/1.jpeg',
        medium: 'assets/img/spirit/galeria/1.jpeg',
        big: 'assets/img/spirit/galeria/1.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/2.jpeg',
        medium: 'assets/img/spirit/galeria/2.jpeg',
        big: 'assets/img/spirit/galeria/2.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/3.jpeg',
        medium: 'assets/img/spirit/galeria/3.jpeg',
        big: 'assets/img/spirit/galeria/3.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/4.jpeg',
        medium: 'assets/img/spirit/galeria/4.jpeg',
        big: 'assets/img/spirit/galeria/4.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/5.jpeg',
        medium: 'assets/img/spirit/galeria/5.jpeg',
        big: 'assets/img/spirit/galeria/5.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/6.jpeg',
        medium: 'assets/img/spirit/galeria/6.jpeg',
        big: 'assets/img/spirit/galeria/6.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/7.jpeg',
        medium: 'assets/img/spirit/galeria/7.jpeg',
        big: 'assets/img/spirit/galeria/7.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/8.jpeg',
        medium: 'assets/img/spirit/galeria/8.jpeg',
        big: 'assets/img/spirit/galeria/8.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/9.jpeg',
        medium: 'assets/img/spirit/galeria/9.jpeg',
        big: 'assets/img/spirit/galeria/9.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/10.jpeg',
        medium: 'assets/img/spirit/galeria/10.jpeg',
        big: 'assets/img/spirit/galeria/10.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/11.jpeg',
        medium: 'assets/img/spirit/galeria/11.jpeg',
        big: 'assets/img/spirit/galeria/11.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/12.jpeg',
        medium: 'assets/img/spirit/galeria/12.jpeg',
        big: 'assets/img/spirit/galeria/12.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/13.jpeg',
        medium: 'assets/img/spirit/galeria/13.jpeg',
        big: 'assets/img/spirit/galeria/13.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/14.jpeg',
        medium: 'assets/img/spirit/galeria/14.jpeg',
        big: 'assets/img/spirit/galeria/14.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/15.jpeg',
        medium: 'assets/img/spirit/galeria/15.jpeg',
        big: 'assets/img/spirit/galeria/15.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/16.jpeg',
        medium: 'assets/img/spirit/galeria/16.jpeg',
        big: 'assets/img/spirit/galeria/16.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/17.jpeg',
        medium: 'assets/img/spirit/galeria/17.jpeg',
        big: 'assets/img/spirit/galeria/17.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/18.jpeg',
        medium: 'assets/img/spirit/galeria/18.jpeg',
        big: 'assets/img/spirit/galeria/18.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/19.jpeg',
        medium: 'assets/img/spirit/galeria/19.jpeg',
        big: 'assets/img/spirit/galeria/19.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/20.jpeg',
        medium: 'assets/img/spirit/galeria/20.jpeg',
        big: 'assets/img/spirit/galeria/20.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/21.jpeg',
        medium: 'assets/img/spirit/galeria/21.jpeg',
        big: 'assets/img/spirit/galeria/21.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/22.jpeg',
        medium: 'assets/img/spirit/galeria/22.jpeg',
        big: 'assets/img/spirit/galeria/22.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/23.jpeg',
        medium: 'assets/img/spirit/galeria/23.jpeg',
        big: 'assets/img/spirit/galeria/23.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/24.jpeg',
        medium: 'assets/img/spirit/galeria/24.jpeg',
        big: 'assets/img/spirit/galeria/24.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/25.jpeg',
        medium: 'assets/img/spirit/galeria/25.jpeg',
        big: 'assets/img/spirit/galeria/25.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/26.jpeg',
        medium: 'assets/img/spirit/galeria/26.jpeg',
        big: 'assets/img/spirit/galeria/26.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/27.jpeg',
        medium: 'assets/img/spirit/galeria/27.jpeg',
        big: 'assets/img/spirit/galeria/27.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/28.jpeg',
        medium: 'assets/img/spirit/galeria/28.jpeg',
        big: 'assets/img/spirit/galeria/28.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/29.jpeg',
        medium: 'assets/img/spirit/galeria/29.jpeg',
        big: 'assets/img/spirit/galeria/29.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/30.jpeg',
        medium: 'assets/img/spirit/galeria/30.jpeg',
        big: 'assets/img/spirit/galeria/30.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/31.jpeg',
        medium: 'assets/img/spirit/galeria/31.jpeg',
        big: 'assets/img/spirit/galeria/31.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/32.jpeg',
        medium: 'assets/img/spirit/galeria/32.jpeg',
        big: 'assets/img/spirit/galeria/32.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/33.jpeg',
        medium: 'assets/img/spirit/galeria/33.jpeg',
        big: 'assets/img/spirit/galeria/33.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/34.jpeg',
        medium: 'assets/img/spirit/galeria/34.jpeg',
        big: 'assets/img/spirit/galeria/34.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/35.jpeg',
        medium: 'assets/img/spirit/galeria/35.jpeg',
        big: 'assets/img/spirit/galeria/35.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/36.jpeg',
        medium: 'assets/img/spirit/galeria/36.jpeg',
        big: 'assets/img/spirit/galeria/36.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/37.jpeg',
        medium: 'assets/img/spirit/galeria/37.jpeg',
        big: 'assets/img/spirit/galeria/37.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/38.jpeg',
        medium: 'assets/img/spirit/galeria/38.jpeg',
        big: 'assets/img/spirit/galeria/38.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/39.jpeg',
        medium: 'assets/img/spirit/galeria/39.jpeg',
        big: 'assets/img/spirit/galeria/39.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/40.jpeg',
        medium: 'assets/img/spirit/galeria/40.jpeg',
        big: 'assets/img/spirit/galeria/40.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/41.jpeg',
        medium: 'assets/img/spirit/galeria/41.jpeg',
        big: 'assets/img/spirit/galeria/41.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/40.jpeg',
        medium: 'assets/img/spirit/galeria/40.jpeg',
        big: 'assets/img/spirit/galeria/40.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/41.jpeg',
        medium: 'assets/img/spirit/galeria/41.jpeg',
        big: 'assets/img/spirit/galeria/41.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/42.jpeg',
        medium: 'assets/img/spirit/galeria/42.jpeg',
        big: 'assets/img/spirit/galeria/42.jpeg',
      },
      {
        small: 'assets/img/spirit/galeria/43.jpeg',
        medium: 'assets/img/spirit/galeria/43.jpeg',
        big: 'assets/img/spirit/galeria/43.jpeg',
      },
    ];
  }
}
