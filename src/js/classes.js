import { getData } from './utils.js';
import { getProjectHTML } from './templates.js';

export class Projects {
    constructor(selector) {
        this.wrapper = document.querySelector(selector);
    }
    async init() {
        try {
            this.data = await getData(
                'https://raw.githubusercontent.com/Melnikov-aleks/Portfolio/master/projects.json'
            );
            this.status = 'init';
        } catch (err) {
            console.error(err);
            this.status = err.message;
        }
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

        switch (true) {
            case filter.toUpperCase() === 'ALL' && this.status === 'init':
                this.render(this.data);
                break;
            case filter.toUpperCase() === 'NEW' && this.status === 'init':
                this.render(
                    this.data
                        .slice()
                        .sort((a, b) => {
                            return new Date(b.time) - new Date(a.time);
                        })
                        .filter((project, i) => i < 6)
                );
                break;
            case this.status !== 'init':
                this.wrapper.innerHTML = `<p class="error">Ошибка <span class="error__status">${this.status}</span>, попробуйте позже!</p>`;
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
    }
}
