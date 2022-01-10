const getAll = q => document.querySelectorAll(q);
const get = q => getAll(q)[0];

const toName = name => name.toLowerCase().replace(/[^a-zA-Z0-9À-ž\s]/g, "-").replace(" ", "_");

const select = e => {
    [...e.parentElement.children].forEach(s => s.classList.remove('selected'));
    e.classList.add('selected');
}

const showElement = e => {
    if (!e)
        return;
    e.classList.remove('hidden');
}

const hideElement = e => {
    if (!e)
        return;
    e.classList.add('hidden');
}

const show = selector => {
    showElement(get(selector));
}

const hide = selector => {
    hideElement(get(selector));
}

const showPage = (pageName, action = "", id = "") => {
    if ("" == pageName) {
        console.log("Missing pageName: " + pageName);
        return;
    }
    const page = get(`.page.${pageName}`);
    if (!page) {
        console.log("No such page element: " + pageName);
        return;
    }
    const parts = pageName.split("_")
    if (parts.length == 1) {
        window.lastPage = pageName;
        select(get("#main-nav-tab-" + pageName));
    }
    document.body.setAttribute("page", name);
    document.body.setAttribute("page-action", action);
    document.body.setAttribute("page-id", id);
    [...getAll('.page')].forEach(hideElement);
    showElement(page)
}


const selectPage = e => {
    select(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2)
        return;
    const pageName = parts.pop();
    if (pageName.length < 1)
        return;
    window.lastPage = pageName;
    showPage(pageName);
}


const fire = (eventTypeName, elem = document.body) => {
    const event = new Event(eventTypeName);
    elem.dispatchEvent(event);
}

const listen = (eventTypeName, handler, elem = document.body) => {
    elem.addEventListener(eventTypeName, handler);
}
