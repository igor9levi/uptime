import Component from '@glimmer/component';
import { formatNumber } from 'uptime/utils';

export default class ShowDetailsComponent extends Component {
	get uptime () {
		return formatNumber(this.args.model.uptime);
	}
}