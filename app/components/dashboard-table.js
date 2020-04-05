import Component from '@glimmer/component';

export default class DashboardTableComponent extends Component {
    _sort (array) {
        return array;
    }

    get rows () {
        // console.log(this.args.model)
        const row = this.args.model.sort((a,b) => {
            const nameA = a.alias.toUpperCase(); // ignore upper and lowercase
            const nameB = b.alias.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
            // console.log(a.alias[0] - b.alias[0])
            // console.log(a.alias, b.alias)
            // return (a.alias[0] - b.alias[0]);
        });
        console.log(row)
        return row;
    }

}
