import { HttpService } from 'services';
import { MenuResponse, MenuRequest } from 'MenuTypes';

export class MenuModel {
  public static getAllMenus() {}

  public static sortMenus() {}

  public static searchMenus() {}

  public static createMenu(menu: MenuRequest) {
    return HttpService.post<MenuRequest, MenuResponse>('/menus', menu);
  }
}
