import { HttpService } from 'services';
import { MenuResponse, MenuRequest } from 'MenuTypes';

export class MenuModel {
  public static readonly CURRENCIES = {
    USD: 'USD',
    EUR: 'EUR',
    CRC: 'CRC',
  } as const;

  public static readonly SORT_BY = {
    price_asc: 'price_asc',
    price_desc: 'price_desc',
  } as const;

  public static getMenus(queryParams?: string) {
    return HttpService.get<MenuResponse[]>(`/menus${queryParams ? `?${queryParams}` : ''}`);
  }

  public static createMenu(menu: MenuRequest) {
    return HttpService.post<MenuRequest, MenuResponse>('/menus', menu);
  }

  public static formatCurrency(price: number, currency: CurrentType) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });

    return formatter.format(price);
  }
}

export type CurrentType = keyof typeof MenuModel.CURRENCIES;
export type SortByType = (typeof MenuModel.SORT_BY)[keyof typeof MenuModel.SORT_BY];
