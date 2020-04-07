import Component from '@glimmer/component';
import { formatNumber } from 'uptime/utils';

export default class TableRowComponent extends Component {

    get status () {
        return this.args.model.down ? 'DOWN' : 'UP';
    }

    get alias () {
        return this.args.model.alias || this.url;
    }

    get uptime () {
        return formatNumber(this.args.model.uptime);
    }

    get url () {
        return `https://updown.io/${this.args.model.token}`;
    }
}
