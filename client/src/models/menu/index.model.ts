import { HttpService } from 'services';
import { MenuResponse, MenuRequest } from 'MenuTypes';

export class MenuModel {
  public static readonly CURRENCY_SYMBOL = {
    USD: '$',
    EUR: '€',
    CRC: '₡',
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
}

export type SortByType = (typeof MenuModel.SORT_BY)[keyof typeof MenuModel.SORT_BY];
