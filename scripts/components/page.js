const page = (
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = "",
    parent = "",
) =>
    div(
        `${name} page ${ selected ? "" : "hidden"}`,
        title(
            actionItem(parent ? "back" : "menu") +
                    div("title-middle",
                div("title-text", caption) +
                actionItem("search")
            ) + actionItem("account-circle")) +
        choiceSet("${name}-filters", choiceList, selectedChoice) +
        contentPanel(content), `id='page-${name}'`);