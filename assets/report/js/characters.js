class Character {
  constructor(
    name,
    title,
    body,
    development,
    image_path,
    position,
    connected_to,
    connection,
    verbs,
    nouns,
    adjectives
  ) {
    this.name = name;
    this.title = title;
    this.body = body;
    this.development = development;
    this.image_path = image_path;
    this.position = position;
    this.connected_to = connected_to;
    this.connection = connection;
    this.verbs = verbs;
    this.nouns = nouns;
    this.adjectives = adjectives;
  }
}

let characters = [
  new Character(
    "Winston Smith",
    "Primary Protagonist",

    `Winston Smith is the primary protagonist of this story. 
      The plot of the book revolves around his life in London,
       and the narrator follows his activities. Smith works in
        the ministry of truth, as a records editor. As a records
         editor, Smith’s job is to literally re-write history to
          fit the needs of the party. Smith is an outer party
           member, which is equivalent to the middle class in our society.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis`,
    "wiston_smith.jpg",
    0,
    [1, 2, 3, 4, 5, 6, 7],
    index => {
      let val = "";
      switch (index) {
        case 0:
          break;
        case 1:
          val = "Is in love with";
          break;
        case 2:
          val =
            "Trusts and conspires with and works in the ministry of truth with";
          break;
        case 3:
          val = "Conspires against and tries to topple";
          break;
        case 4:
          val = "Works with and is friends with";
          break;
        case 5:
          val = "Works with and is friends with";
          break;
        case 6:
          val = "Is technically married to";
          break;
        case 7:
          val = "Befriends and trusts, only to be betrayed later by";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    ["To Fight", "To Love", "To Hope"],
    ["Diary", "Evidence", "Charrington's Loft"],
    ["Curious", "Excited", "Motivated"]
  ),
  new Character(
    "Julia",
    "Secondary Protagonist",

    `Julia is the secondary protagonist in this story, and the love interest of Winston. 
    They meet originally when Winston suspects Julia of being a member of the thought 
    police, when in fact she is just interested in him. They spend the vast majority
     of their time together having sex and talking about a possible future. They also
      get recruited by O’Brien in to a so called “Brotherhood” to overthrow big
       brother, which turns out to be a creation of the thought police.`,
    "",
    "julia.gif",
    1,
    [0, 2, 7],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Is in love with";
          break;
        case 2:
          val = "Works with in the ministry of truth and conspires with";
          break;
        case 7:
          val = "Trusts and gets caught by";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    ["To Fight", "To Rebel", "To Sneak"],
    ["Note", "Sash", "Conversation"],
    ["Carefree", "Happy", "Cunning"]
  ),
  new Character(
    "O'Brien",
    "Primary Antagonist",

    `O’Brien is, in my eyes, the primary antagonist of this story. He is an inner 
      party member and works at the ministry of truth with Winston. In the first part
       of the book, he convinces Winston that he is a member of the alleged “Brotherhood” 
       that is working to disband the government and overthrow big brother. It is later
        revealed, however, that he isn’t in the brotherhood and that he has been working
         against Winston this whole time.
      `,
    "",
    "obrien.jpg",
    2,
    [0, 3],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Tricks and betrays";
          break;
        case 3:
          val = "Works for";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    ["To Betray", "To Win", "To Trick"],
    ["Might", "Brotherhood", "Inner Party"],
    ["Powerful", "Realistic", "Trustworthy"]
  ),
  new Character(
    "Big Brother",
    "Antagonist",

    `This may be controversial, but I’m going to call big brother 
    the secondary antagonist in this story rather than the primary.
     While Big Brother may be the “Highest Evil” available,
      I feel like the story is only using it as a prop for the true antagonist, O’Brien.
    `,
    "",
    "big_brother.png",
    3,
    [0, 2],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Commands over all and watches";
          break;
        case 2:
          val = "Oversees and uses";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    [],
    [],
    []
  ),
  new Character(
    "Syme",
    "Supporting Character",

    `Syme doesn’t get a lot of character development in this story, but we do 
    get a brief insight into his personality. He’s a very typical “nerdy”
     type character, in charge of redefining the “Newspeak” dictionary. 
     Later in the book we see that he gets obliterated because he was too intelligent
      and knew too much for his own good.
    `,
    "",
    "syme.jpg",
    4,
    [0, 1, 2],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Works with and befriends";
          break;
        case 1:
          val = "Talks with on break";
          break;
        case 2:
          val = "Is overseen and instructed by";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    [],
    [],
    []
  ),
  new Character(
    "Tom Parsons",
    "Supporting Character",

    `Tom Parsons is a supporting character throughout this story, and a coworker of Winston.
     He was in charge of coming up with ideas to boost support for big brother, 
     such as community hikes or campaigns. He gets obliterated later in the book
     along with Winston for whispering in his sleep against big brother.
    `,
    "",
    "tom_parson.gif",
    5,
    [0, 1, 2],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Lives near to and is good friends with";
          break;
        case 1:
          val = "Is acquainted at work with";
          break;
        case 2:
          val = "Is overseen and instructed by";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    [],
    [],
    []
  ),
  new Character(
    "Katharine",
    "Winston's Wife",

    `Katherine is Winston’s Ex-Wife. Winston hated Katherine, and was 
    contemplating killing her to avoid having to continue living with 
    her. Luckily for him, he was able to convince her to leave him instead. 
    They are still married, but that is only a technicality. `,
    "",
    "question.png",
    6,
    [0],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Is married to";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    [],
    [],
    []
  ),
  new Character(
    "Mr. Charrington",
    "Tertiary Antagonist",

    `Mr. Charrington is a tertiary antagonist in this
     story and also a member of the thought police. He 
     is set up to catch Winston in his crimes, and impersonates 
     a shop owner to do so. He agrees to lease Winston a room 
     above his shop in exchange for a monthly fee, much to
      Winston’s enjoyment. Unfortunately for Winston, the
       room is bugged with a telescreen which is used to 
       catch all the thought crimes he commits. This leads to his eventual arrest and capture.`,
    "",
    "charrington.gif",
    7,
    [0, 1, 2, 3],
    index => {
      let val = "";
      switch (index) {
        case 0:
          val = "Rents a room to and them tricks and catches";
          break;
        case 1:
          val = "Tricks and catches";
          break;
        case 2:
          val = "Is set to work to catch Winston by";
          break;
        case 3:
          val = "Is an agent working for";
          break;
        default:
          val =
            "Oh no! An error occured. These characters have no significant connection";
          break;
      }
      return val;
    },
    [],
    [],
    []
  )
];

let openRelationBox = (event, char_index, target_index) => {
  let { clientX, clientY } = event;
  let bottom = window.innerHeight - clientY;
  let right = window.innerWidth - clientX;
  let box = document.getElementById("relation-box");
  box.style.bottom = `${bottom + 12}px`;
  box.style.right = `${right + 15}px`;
  box.innerHTML = characters[char_index].connection(target_index);
  box.classList.add("relation-box-open");
};

let closeRelationBox = () => {
  let box = document.getElementById("relation-box");
  box.style.bottom = "-200px";
  box.style.right = "-100px";
  box.classList.remove("relation-box-open");
};

let renderBodyCard = (character, char_index) => {
  let card = document.getElementById("body-card");
  card.innerHTML = `
      <div class="body-card-top-row">
          <div class="body-character-image" style="background-image: url('/report/report/images/${
            character.image_path
          }')">
  
          </div>
          <div class="body-character-name">
              ${character.name}
          </div>
          <div class="body-character-title">
              ${character.title}
          </div>
      </div>
      <div class="body-content-container">
      <div class="body-body">
          ${character.body}
      </div>
      <!-- <div class="body-summary">
          <div>
            Development
          </div>
          ${character.development}
      </div> -->
      ${
        character.verbs.length
          ? `<div class="body-description-section">
        <div>
          Verbs
        </div>
        <div>
          ${character.verbs.join(", ")}
        </div>
    </div>`
          : ""
      }
      ${
        character.nouns.length
          ? `<div class="body-description-section">
        <div>
          Nouns
        </div>
        <div>
          ${character.nouns.join(", ")}
        </div>
    </div>`
          : ""
      }
      ${
        character.adjectives.length
          ? `<div class="body-description-section">
        <div>
          Adjectives
        </div>
        <div>
          ${character.adjectives.join(", ")}
        </div>
    </div>`
          : ""
      }
      <div class="body-footer-connected">
          Connected To
      </div>
      <div class="body-footer">
          ${character.connected_to
            .map(index => {
              return `
              <div onmousemove="openRelationBox(event, '${char_index}', ${index})" onmouseout="closeRelationBox()" class="connection-circle" style="background-image: url('/report/images/${characters[index].image_path}')" onclick="characterSwitch(${index})">
                  <div class="connection-circle-name">
                      ${characters[index].name}
                  </div>
              </div>
              `;
            })
            .join(" ")}
      </div>
      </div>
      `;
};

let characterSwitch = index => {
  closeRelationBox();
  let cards = document.getElementsByClassName("character-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("character-card-active");
  }
  let element = document.getElementById(`character-card-${index}`);
  element.classList.add("character-card-active");
  let card = document.getElementById("body-card");
  card.classList.add("fade-to-none");
  setTimeout(() => {
    renderBodyCard(characters[index], index);
    card.classList.remove("fade-to-none");
  }, 300);
};

let scrollCharacter = element => {};

let renderCharacter = (character, index) => {
  let card = document.createElement("div");
  card.className = `character-card card-position-${character.position}`;
  card.id = `character-card-${index}`;
  card.setAttribute("onclick", `characterSwitch(${index})`);
  card.innerHTML = `
      <div class="top-row">
          <div class="character-image" style="background-image: url('/report/images/${character.image_path}')">
  
          </div>
          <div class="character-name">
              ${character.name}
          </div>
          <div class="character-title">
              ${character.title}
          </div>
      </div>
      <div class="character-body">
          ${character.body}
      </div>
      `;
  document.getElementById("container").appendChild(card);
};

window.onload = () => {
  characters.forEach(renderCharacter);
};
