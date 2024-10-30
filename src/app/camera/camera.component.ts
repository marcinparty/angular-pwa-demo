import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [
    CommonModule,
    ZXingScannerModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss',
})
export class CameraComponent {
  protected availableDevices: MediaDeviceInfo[];
  protected currentDeviceControl = new FormControl<MediaDeviceInfo | null>(null);
  protected hasDevices: boolean;

  protected formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  protected qrResultString: string;

  protected get currentDevice(): MediaDeviceInfo | null {
    return this.currentDeviceControl.value;
  }

  constructor(private readonly _dialog: MatDialog) {}

  protected clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  protected onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}
