const icon = (icon = "menu") => div("icon-frame", `<img class="icon" src="./images/icons/icon-${icon}.svg">`);
// const listItem = text => div("nav-list-item", text);
const text = (text) => div("text", text);
const contentPanel = content => content ? div("content-panel", content) : "";

const title = text => div("title", text);
const subtitle = text => div("subtitle", text);
const circle = text => div("circle", text);

const choice = (text, selected = false, badgeText = "") => div(
    `choice ${selected ? 'selected' : ''}`,
    text + badgeText,
    `onclick='select(this)'`
);

const choiceSet = (id, choiceList=[], selectedItem="") => div("choice-set",
    [...choiceList].map(c => choice(c, c == selectedItem)).join("")
    , `id="${id}" class='secondary-nav'`
);

const action = name => ` onclick="actionClick('${name}')"`;

const actionPanel = (content) => div(
    `action-panel`,
    content);
const actionButton = (name) => div(
    `action-button`,
    name,
    action(name)
);
const actionItem = (name, showName=false, badgeText = "") => div(
    `action-item`,
    (name ? icon(name) : "" ) +
    badgeText +
    (showName ? `${name}` : "" ),
    action(name)
);

const hashTag = (c,color="none") => div(`hash-tag ${color}`, c);
const hashTagRed = (c) => div("hash-tag red", c);
const hashTagGreen = (c) => div("hash-tag green", c);
const hashTagBlue = (c) => div("hash-tag blue", c);
const hashTagGold = (c) => div("hash-tag gold", c);
const hashTagSilver = (c) => div("hash-tag silver", c);
const hashTagBlack = (c) => div("hash-tag black", c);
const hashTagWhite = (c) => div("hash-tag white", c);


const row = (c) => div("row", c);
const col = (c) => div("col", c);
const cardText = (c) => div("card-text", c);
const cardSection = (c) => div("card-section", c);
const cardQuadrant = (c) => div("card-quadrant", c);
const cardTitle = (c) => div("card-title", c);
const cardTitleText = (c) => div("card-title-text", c);
const cardSubtitle = (c) => c ? div("card-subtitle", c) : '';
const cardPhoto = (c) => div("card-photo", c);

const messageText = (c) => div("message-text", c);

const messageItem = (mi) => div("message-item",
    circle(icon("account-circle") + mi[1]) +
    messageText(mi[0])
);

const messagePanel = (messageList=[["",""]]) => div(
    "message-panel",
        [...messageList].map(mi=>messageItem(mi)).join("")
    )

const moneyText = (c) => div("money-text", c);

const moneyItem = (mi) => div("money-item",
    circle(icon("account-circle") + mi[1]) +
    moneyText(mi[2]) +
    moneyText(mi[3]) +
    a(moneyText(mi[0]),"javascript:showPage('settle_list')")
);

const moneyPanel = (messageList=[["",""]]) => {
    return div("money-panel",
        [...messageList].map(mi=>moneyItem(mi)).join("")
    )
}

const personIcon = (p) => div("person-icon",
    circle(icon("account-circle") + p)
);

const cardPeople = (peopleList) => div("card-people",
    [...peopleList].map(p=>personIcon(p)).join("")
);


const cardTags = (tags) => div("card-tags",
    [...tags].map(p=>hashTag(p)).join("")
);

const cardActions = (id, actionList = []) => div("action-list",
    [...actionList].map(c => actionItem(c, actionList.length == 1)).join("")
    , `id="${id}" class='action-list'`
);

const simpleItem = (data, actionName="more") => {
    return div(
        "simple-item",
        (data[0] ? circle(subtitle(data[0])): circle(icon("who"))) +
        div("title-block",
            title(data[1] + " " + data[2])
            // subtitle(data[2])
        ) + actionItem(actionName),
        action(actionName)
    )
}

const simpleList = (titleText, itemData=[["",""]], subtitleText="", actionName="right") => {
    return div(`title-block`,
        (titleText ? title(titleText) : "" )+
        (subtitleText ? subtitle(subtitleText) : "")
    ) + div("simple-list",
        [...itemData].map(item=>simpleItem(item, actionName)).join("")
    )
}