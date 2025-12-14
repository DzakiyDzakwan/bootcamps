function nilaiTertinggi(siswa) {
  // Code disini
  let adonis = {
    name: "",
    score: 0,
  };

  let vuejs = {
    name: "",
    score: 0,
  };

  let reactjs = {
    name: "",
    score: 0,
  };

  siswa.forEach((siswa) => {
    if (siswa.class === "adonis") {
      if (siswa.score > adonis.score) {
        adonis.name = siswa.name;
        adonis.score = siswa.score;
      }
    } else if (siswa.class === "vuejs") {
      if (siswa.score > vuejs.score) {
        vuejs.name = siswa.name;
        vuejs.score = siswa.score;
      }
    } else {
      if (siswa.score > reactjs.score) {
        reactjs.name = siswa.name;
        reactjs.score = siswa.score;
      }
    }
  });

  return { adonis, vuejs, reactjs };
}

// TEST CASE
console.log(
  nilaiTertinggi([
    {
      name: "Asep",
      score: 90,
      class: "adonis",
    },
    {
      name: "Ahmad",
      score: 85,
      class: "vuejs",
    },
    {
      name: "Regi",
      score: 74,
      class: "adonis",
    },
    {
      name: "Afrida",
      score: 78,
      class: "reactjs",
    },
  ])
);

/* nilaiTertinggi([
  {
    name: "Asep",
    score: 90,
    class: "adonis",
  },
  {
    name: "Ahmad",
    score: 85,
    class: "vuejs",
  },
  {
    name: "Regi",
    score: 74,
    class: "adonis",
  },
  {
    name: "Afrida",
    score: 78,
    class: "reactjs",
  },
]); */

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }

console.log(
  nilaiTertinggi([
    {
      name: "Bondra",
      score: 100,
      class: "adonis",
    },
    {
      name: "Putri",
      score: 76,
      class: "laravel",
    },
    {
      name: "Iqbal",
      score: 92,
      class: "adonis",
    },
    {
      name: "Tyar",
      score: 71,
      class: "laravel",
    },
    {
      name: "Hilmy",
      score: 80,
      class: "vuejs",
    },
  ])
);

// {
//   adonis: { name: 'Bondra', score: 100 },
//   laravel: { name: 'Putri', score: 76 },
//   vuejs: { name: 'Hilmy', score: 80 }
// }
