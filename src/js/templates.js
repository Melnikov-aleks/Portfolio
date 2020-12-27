export function getProjectHTML(project) {
    return `
	<li class="projects-list__item project" data-tag="${project.tags.join(' ')}" data-time="${
        project.time
    }">
	<h3 class="project__title">${project.name}</h3>
		${getPreviewsHTML(project.previews, project.name)}
		<p class="project__description">${project.description}</p>
		${getKeywordsHTML(project.keywords)}
		${getButtonsHTML(project.links)}
	</li>`;
}

function getPreviewsHTML(previews, name) {
    const html = [];
    for (const key in previews) {
        if (previews.hasOwnProperty(key)) {
            html.push(`
			<div class="project__preview-${key}">
				<img class="project__img-${key}" src="${previews[key]}" alt="${name}">
			</div>`);
        }
    }
    if (html.length) return `<figure class="project__previews">${html.join('')}</figure>`;
    return '';
}

function getKeywordsHTML(keywords) {
    const html = [];
    for (const key in keywords) {
        if (keywords.hasOwnProperty(key)) {
            html.push(`<li class="project__tag">${keywords[key]}</li>`);
        }
    }
    if (html.length) return `<ul class="project__tags-list">${html.join('')}</ul>`;
    return '';
}

function getButtonsHTML(links) {
    const html = [];
    for (const key in links) {
        if (links.hasOwnProperty(key)) {
            html.push(
                `<a class="project__btn btn-${key} btn" href="${links[key]}" target="_blank" rel="noopener noreferrer">
					<span class="btn__border"></span>
					<span class="btn__border"></span>
					<span class="btn__border"></span>
					<span class="btn__border"></span>
					${key}
				</a>`
            );
        }
    }
    if (html.length) return `<div class="project__buttons">${html.join('')}</div>`;
    return '';
}
