import test from 'ava';
import parseResult from '../src/index';

test('it is a function', t => {
  t.is(typeof parseResult, 'function');
});
