import { HttpService } from 'services';
import { MenuModel, CurrentType } from './index.model';
import { MenuResponse, MenuRequest } from 'MenuTypes';

jest.mock('services', () => ({
  HttpService: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

describe('MenuModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getMenus', () => {
    it('should call HttpService.get with the correct URL without queryParams', async () => {
      const mockResponse: MenuResponse[] = [];
      (HttpService.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await MenuModel.getMenus();

      expect(HttpService.get).toHaveBeenCalledWith('/menus');
      expect(result).toEqual(mockResponse);
    });

    it('should call HttpService.get with the correct URL with queryParams', async () => {
      const mockResponse: MenuResponse[] = [];
      (HttpService.get as jest.Mock).mockResolvedValue(mockResponse);

      const queryParams = 'sort=price_asc';
      const result = await MenuModel.getMenus(queryParams);

      expect(HttpService.get).toHaveBeenCalledWith(`/menus?${queryParams}`);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('createMenu', () => {
    it('should call HttpService.post with the correct URL and data', async () => {
      const mockRequest: MenuRequest = { name: 'Test Menu', price: '10', currency: 'USD' };
      const mockResponse = {
        id: 1,
        ...mockRequest,
        image_url: null,
        description: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as MenuResponse;

      (HttpService.post as jest.Mock).mockResolvedValue(mockResponse);

      const result = await MenuModel.createMenu(mockRequest);

      expect(HttpService.post).toHaveBeenCalledWith('/menus', mockRequest);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('formatCurrency', () => {
    it('should format the price correctly for USD', () => {
      const price = 10;
      const currency: CurrentType = 'USD';
      const formattedPrice = MenuModel.formatCurrency(price, currency);

      expect(formattedPrice).toBe('$10.00');
    });

    it('should format the price correctly for EUR', () => {
      const price = 10;
      const currency: CurrentType = 'EUR';
      const formattedPrice = MenuModel.formatCurrency(price, currency);

      expect(formattedPrice).toBe('€10.00');
    });

    it('should format the price correctly for CRC', () => {
      const price = 10;
      const currency: CurrentType = 'CRC';
      const formattedPrice = MenuModel.formatCurrency(price, currency);

      expect(formattedPrice).toBe('CRC 10.00');
    });
  });
});
