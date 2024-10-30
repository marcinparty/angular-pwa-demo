import { Routes } from '@angular/router';
import {ScannerComponent} from './scanner/scanner.component';
import {CameraComponent} from './camera/camera.component';
import {MaterialComponent} from './material/material.component'

export const routes: Routes = [
    { 
        path: 'scanner',
        title: 'Scaanner page title',
        component: ScannerComponent
    },
    {
        path: 'camera',
        title: 'Camera page title',
        component: CameraComponent
    },
    {
        path: 'material',
        title: 'Material page title',
        component: MaterialComponent
    }
];
