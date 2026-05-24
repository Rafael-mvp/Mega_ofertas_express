import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  mensagem: string;
  tipo: 'sucesso' | 'erro';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private subject = new BehaviorSubject<Toast | null>(null);
  toast$ = this.subject.asObservable();
  private timer: ReturnType<typeof setTimeout> | null = null;

  mostrar(mensagem: string, tipo: 'sucesso' | 'erro' = 'sucesso'): void {
    if (this.timer) clearTimeout(this.timer);
    this.subject.next({ mensagem, tipo });
    this.timer = setTimeout(() => this.subject.next(null), 3000);
  }
}
