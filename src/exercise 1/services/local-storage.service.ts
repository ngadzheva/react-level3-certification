type Listener = (newValue: string | null) => void;

class LocalStorageService {
    private listeners: Record<string, Listener[]> = {};

    constructor() {
        window.addEventListener('storage', (event) => {
            if (event.key && event.newValue !== event.oldValue) {
                this.notifyListeners(event.key, event.newValue);
            }
        });
    }

    setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);

        this.notifyListeners(key, value);
    }

    getItem = (key: string): string | null => {
        return localStorage.getItem(key);
    }

    getItemsKeys = (): string[] => {
        return Object.keys(localStorage);
    }

    removeItem = (key: string) => {
        localStorage.removeItem(key);

        this.notifyListeners(key, null);
    }

    subscribe = (key: string, listener: Listener): () => void => {
        if (!this.listeners[key]) {
          this.listeners[key] = [];
        }

        this.listeners[key].push(listener);
    
        return () => {
          this.listeners[key] = this.listeners[key].filter(existingListener => {
            return existingListener !== listener
          });
        };
    }
    
    private notifyListeners = (key: string, newValue: string | null) => {
        if (this.listeners[key]) {
          this.listeners[key].forEach(listener => listener(newValue));
        }
    }
}

export const localStorageService = new LocalStorageService();
