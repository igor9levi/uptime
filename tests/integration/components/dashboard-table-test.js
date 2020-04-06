import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dashboard-table', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.model = [
      {
        "token": "token1",
        "url": "https://test.com/token1",
        "alias": "Token 1",
        "last_status": null,
        "uptime": 99.836,
        "down": false,
        "down_since": null,
        "error": null,
        "favicon_url": "https://test.com/token1.jpg",
      },
      {
        "token": "token2",
        "url": "https://test.com/token2",
        "alias": "Token 2",
        "last_status": null,
        "uptime": 100,
        "down": false,
        "down_since": null,
        "error": null,
        "favicon_url": "https://test.com/token2.jpg",
      },
      {
        "token": "token3",
        "url": "https://test.com/token3",
        "alias": "Token 3",
        "last_status": null,
        "uptime": 85.723,
        "down": true,
        "down_since": null,
        "error": null,
        "favicon_url": "https://test.com/token3.jpg",
      }
    ];
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DashboardTable @model={{this.model}} />`);

    assert.dom('.qa-dashboard-table').exists();
  });

  test('it renders correct number of rows with correct content and order', async function(assert) {
    await render(hbs`<DashboardTable @model={{this.model}} />`);
    
    assert.dom('.qa-table-row').exists({ count: 3 });
    assert.dom('.qa-service-icon').exists();
    assert.dom('.qa-service-icon').hasClass('down');
    assert.dom('.qa-uptime-icon').doesNotExist();
  });

  test('it renders correct order on sort service column', async function(assert) {
    await render(hbs`<DashboardTable @model={{this.model}} />`);

    assert.dom('.qa-service-icon').hasClass('down');
    assert.dom('.qa-uptime-icon').doesNotExist();
    assert.dom('.qa-table-row:first-child td:first-child a').containsText('Token 1');

    await click('.qa-service');

    assert.dom('.qa-service-icon').hasClass('up');
    assert.dom('.qa-uptime-icon').doesNotExist();
    assert.dom('.qa-table-row:first-child td:first-child a').containsText('Token 3');


  });

  test('it renders correct order on sort uptime column', async function(assert) {
    await render(hbs`<DashboardTable @model={{this.model}} />`);

    await click('.qa-uptime');

    assert.dom('.qa-uptime-icon').hasClass('up');
    assert.dom('.qa-service-icon').doesNotExist();
    assert.dom('.qa-table-row:first-child .qa-uptime-column').containsText('100%');

    await click('.qa-uptime');

    assert.dom('.qa-uptime-icon').hasClass('down');
    assert.dom('.qa-service-icon').doesNotExist();
    assert.dom('.qa-table-row:first-child .qa-uptime-column').containsText('85.72%');

  });
});
