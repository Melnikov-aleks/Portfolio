import { getData } from './utils.js';
import { getProjectHTML } from './templates.js';

export class Projects {
    constructor(selector) {
        this.wrapper = document.querySelector(selector);
    }
    async init() {
        return getData('./projects.json')
            .then((response) => {
                this.data = response;
                this.status = 'init';
            })
            .catch((err) => {
                console.log(this, err);
            });
    }
    render(projects) {
        this.wrapper.innerHTML = '';
        const html = [];
        projects.forEach((project) => {
            html.push(getProjectHTML(project));
        });
        this.wrapper.innerHTML = html.join('');
    }
    async filter(filter = 'all') {
        if (this.status !== 'init') await this.init();
        // let toRender = this.data;
        // if (filter && filter.toUpperCase() !== 'ALL') {
        //     toRender = this.data.filter((project) =>
        //         project.tags.some((tag) => tag.toUpperCase() == filter.toUpperCase())
        //     );
        // }
        switch (true) {
            case filter.toUpperCase() === 'ALL':
                this.render(this.data);
                break;
            case filter.toUpperCase() === 'NEW':
                this.render(
                    this.data
                        .slice()
                        .sort((a, b) => {
                            return new Date(b.time) - new Date(a.time);
                        })
                        .filter((project, i) => i < 6)
                );
                break;
            default:
                this.render(
                    this.data.filter((project) =>
                        project.tags.some(
                            (tag) => tag.toUpperCase() == filter.toUpperCase()
                        )
                    )
                );
                break;
        }
        // console.log(new Date(this.data[0].time));
        // this.render(toRender);
    }
}
