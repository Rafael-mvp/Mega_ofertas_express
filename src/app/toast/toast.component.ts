import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  imports: [AsyncPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
