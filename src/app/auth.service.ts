import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'clienteLogado';

  private clienteSubject = new BehaviorSubject<Cliente | null>(null);
  readonly cliente$ = this.clienteSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    const stored = this.lerDoStorage();
    if (stored) this.clienteSubject.next(stored);
  }

  private lerDoStorage(): Cliente | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  isLogado(): boolean {
    return this.clienteSubject.value !== null;
  }

  getCliente(): Cliente | null {
    return this.clienteSubject.value;
  }

  login(cliente: Cliente): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.KEY, JSON.stringify(cliente));
    }
    this.clienteSubject.next(cliente);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.KEY);
    }
    this.clienteSubject.next(null);
    this.router.navigate(['/login']);
  }
}
