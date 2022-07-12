import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image = null;
  cameraActive = false;

  option = {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1,
  };


  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear', // 후방 카메라
    toBack: true,
    tapPhoto: true,
    tapFocus: true,
    previewDrag: false,
    storeToFile: false,
    disableExifHeaderStripping: false,
  };

  constructor(private cameraPreview: CameraPreview) {}

  openCamera() {
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
    this.cameraActive = true;
  }




}
