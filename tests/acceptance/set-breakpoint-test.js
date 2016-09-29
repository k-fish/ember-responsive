import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Set Breakpoint');

test('setBreakpoint helper works - mobile', function(assert) {
  assert.expect(2);
  visit('/');
  setBreakpoint('mobile');

  andThen(() => {
    const activeElements = find('div.active');
    assert.equal(activeElements.length, 1);
    assert.equal(activeElements[0].text(), 'Mobile View');
  });
});
