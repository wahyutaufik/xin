/* eslint-env mocha */

import assert from 'assert';
import xin from '../../';
import '../../components/pager';

describe('Pager', () => {
  it('defined', () => {
    assert(xin('xin-pager'));
  });
});
