import { action } from 'typesafe-actions';

import { HeaderTypes } from './types';

export const pageSelect = (page: string) =>
  action(HeaderTypes.PAGE_SELECT, { page });
