declare module 'MenuTypes' {
  export interface MenuResponse {
    id: number;
    name: string;
    price: string;
    created_at: string;
    updated_at: string;
    image_url: string | null;
    description: string | null;
    currency: 'USD' | 'EUR' | 'CRC';
  }

  export interface MenuRequest {
    name: string;
    price: string;
    image_url?: string;
    description?: string;
    currency?: 'USD' | 'EUR' | 'CRC';
  }

  export interface MenuErrorResponse {
    errors: string[];
  }
}
