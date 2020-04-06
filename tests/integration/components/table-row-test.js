import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-row', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.model = {
      "token": "token1",
      "url": "https://test.com/token1",
      "alias": "Token 1",
      "uptime": 99.836,
      "down": false,
      "down_since": null,
      "error": null,
      "favicon_url": "https://test.com/token1.jpg",
    };
  });

  test('it renders', async function(assert) {
    await render(hbs`<TableRow @model={{this.model}} />`);

    assert.dom('.qa-table-row').exists();
  });

  test('it renders correct data', async function(assert) {
    await render(hbs`<TableRow @model={{this.model}} />`);

    assert.dom('.qa-service-column a').hasText('Token 1');
    assert.dom('.qa-service-column a').hasAttribute('href', 'https://updown.io/token1');
    assert.dom('.qa-status-column').hasText('UP');
    assert.dom('.qa-uptime-column').hasText('99.84%');
    // assert.dom('.qa-details-column a').hasAttribute('href', 'https://updown.io/token1');

  });

  test('it renders correct uptime', async function(assert) {
    this.model.uptime = 80;
    await render(hbs`<TableRow @model={{this.model}} />`);

    assert.dom('.qa-uptime-column').hasText('80%');
  });

  test('it renders correct status', async function(assert) {
    this.model.down = true;
    await render(hbs`<TableRow @model={{this.model}} />`);

    assert.dom('.qa-status-column').hasText('DOWN');
  });
});
