import { http, HttpResponse } from 'msw';

import menuJSON from './menu.json';

export const menu = http.get('/menu', () => HttpResponse.json(menuJSON));
