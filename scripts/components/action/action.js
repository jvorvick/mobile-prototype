function action(name, which = "", id = -1, object = {}) {
    return `onclick="actionClick(event, this, '${name}','${which}','${id}')" alt="${name}"`;
//    return `onclick="actionClick(event, this, '${name}','${which}','${id}')" data-object="${JSON.stringify(object).replace(/"/g, "'")}"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

const ACTION_COMPONENT_MAP = {
    "rate": ratingAction,
}

function actionItem(name, which = "", index = -1, textValue = "", iconColor = "", hideText = false, qty = 0, small = false) {
    // console.log("actionItem", name, which, index);

    if (ACTION_COMPONENT_MAP.hasOwnProperty(name)) {
        return ACTION_COMPONENT_MAP[name]();
    }

    if ("favorite" === name) {
        textValue = qty ? qty : textValue;
    }
    const content = div(
        `action-item ${name} ${which} ${small ? 'small' : ''}`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, index)
    );

    return !hideText ? content : tooltip(name, content);
}

function personItem(name, which, index, person) {
    return div(
        `action-item person ${name} ${which}`,
        personIcon(person),
        action(name, which, index, person)
    );
}

function actionClick(e, target, action, which = "", index = -1, data = {}) {
    if (!e)
        e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    //IE8 and Lower
    else {
        e.cancelBubble = true;
    }
    // console.log("click", action, which,index,data,target);
    hideDialog();
    route(target, action, which, index, data);
}
