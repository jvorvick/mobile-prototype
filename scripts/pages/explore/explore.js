const EXPLORE_DATA = [
    [
        "images/photos/cannon-beach.jpg",
        "Haystack Rock",
        "Cannon Beach, Oregon",
        "This is an iconic photo opportunity",
        ["Landmark", "Recommended"],
        [peopleList[BF], peopleList[RUBY], peopleList[JOE]],
        ["share", "favorite", "pin", "collapse"],
        "1",
        ""
    ], [
        "images/photos/hanna-levin.png",
        "Hanna Levin",
        "New Taste Match to Follow!",
        "Hanna Levin has rated over 20 places, including 2 you both love!",
        ["Influencer", "Recommended"],
        [],
        ["share", "favorite", "follow", "collapse"],
        "2",
    ], [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "A lovely wine bar away from everything.",
        ["Seafood", "Restaurant"],
        [peopleList[BF], peopleList[RUBY], peopleList[JOE]],
        ["share", "favorite", "pin", "collapse"],
        "2",
        true,
        "Recommended",
        "Local Expert"
    ]
];

const EXPLORE_CANNON_BEACH = exploreCard(...EXPLORE_DATA[0]);
const EXPLORE_HANNA_LEVIN = exploreCard(...EXPLORE_DATA[1]);

const EXPLORE_LOQUITA = exploreCard(...EXPLORE_DATA[2]);

function explorePage(selected = false) {
    return page(
        selected,
        "explore",
        "Explore",
        ["All", "Personal", "Matches", "Deals"],
        "All",
        cardList([
            EXPLORE_LOQUITA,
            EXPLORE_HANNA_LEVIN,
            EXPLORE_CANNON_BEACH,
        ].join("")),
        "ALL"
    );
    // return page(
    //     selected,
    //     "explore",
    //     "Explore",
    //     [],
    //     "",
    //       img(
    //           "figma-content",
    //           "images/explore_cards.png",
    //           action("open", "explore_detail")
    //       )
    // );

    // return `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRNFPr2XMBBFuj60EEo3TK7%2FVita---Greg%3Fnode-id%3D765%253A1510%26starting-point-node-id%3D765%253A1510" allowfullscreen></iframe>`

}
