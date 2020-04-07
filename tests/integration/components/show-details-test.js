import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | show-details', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.model = {
      token: "token1",
      url: "https://test.com/token1",
      alias: "Token 1",
      uptime: 99.836,
      down: false,
      down_since: null,
      error: null,
      favicon_url: "https://test.com/token1.jpg",
      description: 'test description'
    };
  });

  test('it renders', async function(assert) {
    await render(hbs`<ShowDetails @model={{this.model}} />`);

    assert.dom('.qa-show-details').exists();
  });

  test('it renders correct data', async function(assert) {
    await render(hbs`<ShowDetails @model={{this.model}} />`);

    assert.dom('.detail-info').includesText('Token 1');
    assert.dom('.qa-uptime').hasText('99.84%');
    assert.dom('.qa-description').hasText('test description');
    assert.dom('.qa-down-since').doesNotExist();
  });

  test('it renders correct data', async function(assert) {
    this.model.down = true;
    this.model.down_since = 'yesterday';

    await render(hbs`<ShowDetails @model={{this.model}} />`);

    assert.dom('.qa-down-since').exists();
    assert.dom('.qa-down-since').hasText('yesterday');
  });
});
