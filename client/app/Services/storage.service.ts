import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    public getValue(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setValue(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeValue(key: string): void {
        localStorage.removeItem(key);
    }

    public clearStorage(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            localStorage.clear();
            resolve(true);
        })
    }
}