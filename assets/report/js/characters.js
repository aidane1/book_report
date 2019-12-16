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
      "Protagonist",
  
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
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Diary", "Evidence", "Charrington's Loft"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Julia",
      "Supporting Character",
  
      `O’Brien is, in my eyes, the primary antagonist of this story. 
      He is an inner party member and works at the ministry of truth
       with Winston. In the first part of the book, he convinces Winston
        that he is a member of the alleged “Brotherhood” that is working 
        to disband the government and overthrow big brother. It is later
         revealed, however, that he isn’t in the brotherhood and that he
          has been working against Winston this whole time.`,
      "",
      "julia.gif",
      1,
      [0, 2, 7],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "O'Brien",
      "Primary Antagonist",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "obrien.jpg",
      2,
      [0, 3],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Big Brother",
      "Antagonist",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "big_brother.png",
      3,
      [1, 2],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Syme",
      "Supporting Character",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "syme.jpg",
      4,
      [1, 2],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Tom Parsons",
      "Supporting Character",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "tom_parson.gif",
      5,
      [1, 2],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Katharine",
      "Winston's Wife",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "question.png",
      6,
      [1, 2],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    ),
    new Character(
      "Mr. Charrington",
      "Tertiary Antagonist",
  
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero diam, elementum a egestas at,
      lobortis
      ac turpis. Etiam interdum accumsan ante, vitae semper turpis facilisis id. Duis accumsan nibh a neque
      feugiat condimentum. Maecenas efficitur rhoncus odio vel convallis. Fusce in orci gravida, dictum lacus
      congue, volutpat enim. Proin a egestas nisl.`,
      "",
      "charrington.gif",
      7,
      [1, 2],
      index => {
        let val = "";
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          default:
            val =
              "Oh no! An error occured. These characters have no significant connection";
            break;
        }
        return val;
      },
      ["Speaking", "Running", "Existing"],
      ["Human", "Person", "Yeet"],
      ["Exist", "Fat", "Slow"]
    )
  ];
  
  let openRelationBox = (event, char_index, target_index) => {
    let { clientX, clientY } = event;
    let bottom = window.innerHeight - clientY;
    let right = window.innerWidth - clientX;
    let box = document.getElementById("relation-box");
    box.style.bottom = `${bottom + 12}px`;
    box.style.right = `${right + 15}px`;
    box.innerHTML = characters[char_index].connection(10);
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
      <div class="body-summary">
          <div>
            Development
          </div>
          ${character.development}
      </div>
      <div class="body-description-section">
          <div>
            Verbs
          </div>
          <div>
            ${character.verbs.join(", ")}
          </div>
      </div>
      <div class="body-description-section">
          <div>
            Nouns
          </div>
          <div>
            ${character.nouns.join(", ")}
          </div>
      </div>
      <div class="body-description-section">
          <div>
            Adjectives
          </div>
          <div>
            ${character.adjectives.join(", ")}
          </div>
      </div>
      <div class="body-footer-connected">
          Connected To
      </div>
      <div class="body-footer">
          ${character.connected_to
            .map(index => {
              return `
              <div onmousemove="openRelationBox(event, '${char_index}', '${index}')" onmouseout="closeRelationBox()" class="connection-circle" style="background-image: url('/report/report/images/${characters[index].image_path}')" onclick="characterSwitch(${index})">
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
  