import { fromJS } from 'immutable';
import { DEFAULT_LOCALE } from 'modules/locale/constants';

import languageProviderReducer from '../reducer';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(fromJS({
      locale: DEFAULT_LOCALE,
    }));
  });

  it('changes the locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LOCALE, locale: 'de' }).toJS()).toEqual({
      locale: 'de',
    });
  });
});
