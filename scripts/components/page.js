function page(
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = "",
    parent = "",
    actionContent = "",
    searchMessage = "",
    tabs = ""
) {
    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        div("header",
            title(
                actionItem(parent ? "back" : "menu") +
                div("title-middle", icon(name + "-black", "", caption)) +
                actionItem("map-off") +
                cardPerson(peopleList[RUBY])
                // actionItem("person", "me", 0, "", "black")
            ) +
            ((searchMessage !== undefined && searchMessage.length > 0) ? search([], -1, searchMessage) : "") +
            choiceSet(`${name}-filters`, choiceList, selectedChoice)
        ) +
        contentPanel(
            content +
            (tabs ? tabs : "") +
            actionContent
        ),
        `id='page-${name}'`
    );
}
