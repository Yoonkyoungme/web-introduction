const movies = [
  {
    rank: 1,
    title: "나는 오늘 어제의 너와 만난다",
    poster: "../images/나는_내일_어제의_너와_만난다.jpg",
    link: "https://tv.naver.com/v/2155587",
  },
  {
    rank: 2,
    title: "인터스텔라",
    poster: "../images/인터스텔라.jpg",
    link: "https://tv.naver.com/v/686999",
  },
  {
    rank: 3,
    title: "서치",
    poster: "../images/서치.jpg",
    link: "https://tv.naver.com/v/25363743",
  },
  {
    rank: 4,
    title: "인셉션",
    poster: "../images/인셉션.jpg",
    link: "https://tv.naver.com/v/5723510",
  },
  {
    rank: 5,
    title: "캐치 미 이프 유 캔",
    poster: "../images/캐치_미_이프_유_캔.jpg",
    link: "https://tv.naver.com/v/238535",
  },
];

const tbody = document.getElementById("movie-table");
movies.forEach(function (movie) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${movie.rank}</td>
    <td>${movie.title}</td>
    <td><img src="${movie.poster}" alt="${movie.title} 포스터"></td>
    <td><a href="${movie.link}" target="_blank">바로가기</a></td>`;
  tbody.appendChild(row);
});
