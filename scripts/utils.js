function getAll(q) {
    return document.querySelectorAll(q);
}

function get(q) {
    return getAll(q)[0];
}

function toName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9À-ž\s]/g, "-")
        .replace(" ", "_");
}
function cleanName(n){
    return n.trim().toUpperCase().replace(/\s/g, "-");
}
function applyFilter(e) {
    if (!e) {
        return;
    }
    const cp = e.closest(".page");
    if (!cp) {
        return;
    }
    const cards = cp.querySelectorAll(".card");
    const text = e.innerHTML.toUpperCase();
    console.log(text);
    // debugger;
    cards.forEach((c, i) => {

        if ("ALL" == text) {
            return showElement(c);
        }

        if (!e.dataset.choice || !c.dataset.kind) {
            return hideElement(c);
        }

        let kind = cleanName(c.dataset.kind);
        let choiceName = cleanName(e.dataset.choice);
        const content = cleanName(c.outerHTML);
        console.log(content);

        if (choiceName == kind) {
            return showElement(c);
        }

        if ("NOTIFICATIONS" == choiceName && !["1-ON-1", "GROUP-CHAT"].includes(kind)) {
            return showElement(c);
        }
        hideElement(c);
    });
}

function select(e, id) {
    [...e.parentElement.children].forEach((s) =>
        s.classList.remove("selected")
    );
    e.classList.add("selected");
    applyFilter(e, id);
}

function showElement(e) {
    if (!e) return;
    e.classList.remove("hidden");
}

function hideElement(e) {
    if (!e) return;
    e.classList.add("hidden");
}

function showPage(pageName, action = "", id = "") {
    if ("" == pageName) {
        console.log("Missing pageName: " + pageName);
        return;
    }
    const page = get(`.page.${pageName}`);
    if (!page) {
        console.log("No such page element: " + pageName);
        return;
    }
    const parts = pageName.split("_");
    if (parts.length == 1) {
        window.lastPage = pageName;
        select(get("#main-nav-tab-" + pageName));
    }
    document.body.setAttribute("page", name);
    document.body.setAttribute("page-action", action);
    document.body.setAttribute("page-id", id);

    const pages = document.getElementsByClassName("page");
    [...pages].forEach(hideElement);
    showElement(page);
}

function show(selector) {
    const e = get(selector);
    if (!e) return;
    e.classList.remove("hidden");
}

function hide(selector) {
    const e = get(selector);
    if (!e) return;
    e.classList.add("hidden");
}

function selectPage(e) {
    select(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2) return;
    const pageName = parts.pop();
    if (pageName.length < 1) return;
    //
    // if (pageName == "explore") {
    //     window.open(
    //         "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=726%3A5745&starting-point-node-id=765%3A1510&show-proto-sidebar=0",
    //         "_self"
    //     );
    //     return;
    // }
    // if (pageName == "dream") {
    //     window.open(
    //         "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=80%3A2582&starting-point-node-id=80%3A2507&show-proto-sidebar=0",
    //         "_self"
    //     );
    //     return;
    // }

    window.lastPage = pageName;
    [...getAll(".page")].forEach(hideElement);
    showPage(pageName);
}

function fire(eventTypeName, elem = document.body) {
    const event = new Event(eventTypeName);
    elem.dispatchEvent(event);
}

function listen(eventTypeName, handler, elem = document.body) {
    elem.addEventListener(eventTypeName, handler);
}
