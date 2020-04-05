import Component from "@glimmer/component";

export default class TableRowComponent extends Component {

    _formatNumber (number) {
        const formattedNumber = Number.parseFloat(number).toFixed(2);
        const integerPart = Number.parseInt(formattedNumber);
        const hasDigits = (number - integerPart) > 0;

        return hasDigits ? formattedNumber : integerPart;
    }

    get status () {
        return this.args.model.down ? 'DOWN' : 'UP';
    }

    get alias () {
        return this.args.model.alias || this.url;
    }

    get uptime () {
        return this._formatNumber(this.args.model.uptime);
    }

    get url () {
        return `https://updown.io/${this.args.model.token}`;
    }

    get detailsModel () {
        const uptime = this.uptime;
        const alias = this.alias;
        const {
            token,
            favicon_url,
            url,
            down_since
        } = this.args.model;
        
        return {
            token,
            alias,
            favicon_url,
            url,
            down_since,
            uptime
        };
    }
}
