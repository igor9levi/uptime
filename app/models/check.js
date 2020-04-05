import Model, { attr } from '@ember-data/model';

export default class CheckModel extends Model {
    @attr('string') token;
    @attr('string') url;
    @attr('string') alias;
    @attr('number') last_status;
    @attr('number') uptime;
    @attr('boolean') down;
    @attr('date') down_since;
    @attr error;
    @attr('number') period;
    @attr('number') apdex_t;
    @attr('string') string_match;
    @attr('boolean') enabled;
    @attr('boolean') published;
    @attr disabled_locations;
    @attr('date') last_check_at;
    @attr('string') next_check_at;
    @attr('string') mute_until;
    @attr('string') favicon_url;
    @attr custom_headers;
}
