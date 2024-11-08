import axios from 'axios';
import { HttpService } from './index.service';

jest.mock('axios', () => {
  const mockAxiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };

  return {
    create: jest.fn(() => mockAxiosInstance),
    ...mockAxiosInstance,
  };
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpService', () => {
  const baseURL = 'http://mocked-url.com';

  beforeAll(() => {
    process.env.REACT_APP_HEYCARTER_MENU_SERVER_URL = baseURL;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make a GET request', async () => {
    const url = '/test-get';
    const response = { data: 'test data' };
    mockedAxios.get.mockResolvedValue(response);

    const result = await HttpService.get(url);

    expect(mockedAxios.get).toHaveBeenCalledWith(url, undefined);
    expect(result).toEqual(response);
  });

  it('should make a POST request', async () => {
    const url = '/test-post';
    const data = { key: 'value' };
    const response = { data: 'test data' };
    mockedAxios.post.mockResolvedValue(response);

    const result = await HttpService.post(url, data);

    expect(mockedAxios.post).toHaveBeenCalledWith(url, data, undefined);
    expect(result).toEqual(response);
  });

  it('should make a PUT request', async () => {
    const url = '/test-put';
    const data = { key: 'value' };
    const response = { data: 'test data' };
    mockedAxios.put.mockResolvedValue(response);

    const result = await HttpService.put(url, data);

    expect(mockedAxios.put).toHaveBeenCalledWith(url, data, undefined);
    expect(result).toEqual(response);
  });

  it('should make a PATCH request', async () => {
    const url = '/test-patch';
    const data = { key: 'value' };
    const response = { data: 'test data' };
    mockedAxios.patch.mockResolvedValue(response);

    const result = await HttpService.patch(url, data);

    expect(mockedAxios.patch).toHaveBeenCalledWith(url, data, undefined);
    expect(result).toEqual(response);
  });

  it('should make a DELETE request', async () => {
    const url = '/test-delete';
    const response = { data: 'test data' };
    mockedAxios.delete.mockResolvedValue(response);

    const result = await HttpService.delete(url);

    expect(mockedAxios.delete).toHaveBeenCalledWith(url, undefined);
    expect(result).toEqual(response);
  });
});
