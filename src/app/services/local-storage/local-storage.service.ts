import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  salvarDados(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removerId(id: string): void {
    let ids = this.getIds();
    if (ids) {
      ids = ids.filter(idExistente => idExistente !== id);
      this.salvarDados('bookIds', ids);
    }
  }
  getDados<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }


  limparStorage(): void {
    localStorage.clear();
  }

  salvarId(id: string): void {
    const ids = this.getDados<string[]>('bookIds') || [];
    if (!ids.includes(id)) {
      ids.push(id);
      this.salvarDados('bookIds', ids);
    }
  }

  getIds(): string[] {
    return this.getDados<string[]>('bookIds') || [];
  }

}
