function smartTitle(ve) {
    if (ve.period.ideas.length <= 0) {
        return "";
    }
    return `${ve.period.ideas.length} Smart Ideas for You!`;
}


function timelinePage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;

    let ve = VitaEvent();
    ve.period = getPeriods()[LUNCH];
    ve.when = "12:00pm";
    ve.duration = "2 hours";
    ve.imagePath = "images/photos/brasil_arts_cafe.jpeg";
    ve.titleText = "Brasil Arts Cafe";
    ve.actions = [];
    ve.tags = ["South-American"];
    ve.kind = "restaurants";

    const showDay = day => {
        // debugger;
        return cardListSection(
            day.title,
            day.when,
            actionItem("add-place", day.when, -1, "add-place", "black") +
            actionItem("check-in", "timeline", -1, "Check-In", "black"),
            day.where,
            day.events.map(e => timelineCard(e, day))
        );
    }
    const calendar_days = [
        Day(yesterdayDate, "Yesterday - " + yesterdayDate.toDateString(), []),
        Day(todayDate, "Today - " + todayDate.toDateString(), getPeriods()),
        Day(tomorrowDate, "Tomorrow - " + tomorrowDate.toDateString(), getPeriods()),
    ];
    const card_content = calendar_days.map(showDay).join('');

    const preTabs = actionItem("search", "", -1, "search", "black", true);
    const postTabs = actionItem("add", "timeline", -1, "Add", "black", true);

    const messagesContent = tabSet("conversations", [
        {name: "Current", content: ""},
        {name: "History", content: ""},
    ], "Current", preTabs, postTabs);

    const page_content =
        messagesContent +
        div("right",
            title(
                span("time nowrap", "", `style="width:180px;font-size:15px;"`) +
                " - " +
                span("location", "Santa Barbara") +
                actionItem("edit", "location", -1, "edit", "black")
            )
        ) +
        // actionButton("Smart Ideas", "smart-ideas") +
        // title("Smart Ideas") +
        cardList(card_content);

    const choices = [
        "Go!",
        "Check-Ins",
        "Pay/Settle",
        "Rate/Review",
        "Verify for Offset",
        "Memories",
    ];
    const defaultChoice = "Go!";

    const pushSecondaryNavChoicesAboveSearchFilter = true;
    const tabs = "";
    const searchMessage = "";

    return page(
        selected,
        "timeline",
        "Timeline",
        [], //choices,
        defaultChoice,
        page_content,
        "",
        "",
        "",
        searchMessage,
        tabs,
        pushSecondaryNavChoicesAboveSearchFilter
    );
}
