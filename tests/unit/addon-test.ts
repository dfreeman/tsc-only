import { module, test } from 'qunit';
import { isATypeScriptAddon } from 'tsc-only';

module('Unit | the addon', function () {
  test('its export works', function (assert) {
    assert.ok(isATypeScriptAddon);
  });
});
