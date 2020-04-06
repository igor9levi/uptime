import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from "@ember/array";

export default class DashboardTableComponent extends Component {
    @tracked sortCategory = 'alias';
    @tracked toggleOrder = true;

    get direction () {
        return this.toggleOrder ? 'down' : 'up';
    }

    get rows () {
        if (this.toggleOrder) {
            return A(this.args.model).sortBy(this.sortCategory);
        }
        // More performant would be to use sort(), but for breavity
        // on this scale is acceptable
        return A(this.args.model).sortBy(this.sortCategory).reverse();
    }

    @action
    sortAction (sortCategory) {
        this.sortCategory = sortCategory;
        this.toggleOrder = !this.toggleOrder;
    }
}
