const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // fetching data from api
    .then((res) => res.json()) // converting data to json
    .then((json) => dispayLesson(json.data)); //loadLessoning data to console
};

const loadLevelWord = (id) => {
  // console.log(id);

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWords(data.data));
};

const displayLevelWords = (words) => {
  console.log(words);
  const wordContainer = document.getElementById("word-container");

  wordContainer.innerHTML = "";

//   id: 104;
//   level: 2;
//   meaning: "নীরব";
//   pronunciation: "কুয়েট";
//   word: "Quiet";

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `

        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">${word.meaning} / ${word.pronunciation}</div>

            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i> </button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>

        </div>

        `;

    wordContainer.append(card);
  });
};

const dispayLesson = (lessons) => {
  // console.log(lessons);
  // 1 get the container and empty

  const levelContainer = document.getElementById("level-container");

  levelContainer.innerHTML = "";

  // 2 get into every lesson

  for (let lesson of lessons) {
    // 3 create element for every lesson
    // console.log(lesson);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `

        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>

        `;

    //append the element to the container

    levelContainer.appendChild(btnDiv);
  }
};

loadLesson();
