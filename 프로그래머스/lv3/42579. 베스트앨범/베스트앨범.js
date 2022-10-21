function solution(genres, plays) {
  let answer = [];
  let n = genres.length;
  let obj = {};

  for (let i = 0; i < n; i++) {
    let genre = genres[i];
    let play = plays[i];
    let songObj = {
      id: i,
      play: play,
    };

    if (obj[genre] !== undefined) {
      obj[genre].total += play;
      obj[genre].songs.push(songObj);
    } else {
      obj[genre] = {
        total: play,
        songs: [songObj],
      };
    }
  }
  let tmp = [];

  for (let genre in obj) {
    tmp.push([genre, obj[genre].total]);
    obj[genre].songs.sort((a, b) => {
      return b.play - a.play;
    });
  }

  tmp.sort((a, b) => {
    return b[1] - a[1];
  });

  tmp.forEach((e) => {
    let [genre, _] = e;
    answer.push(...obj[genre].songs.map((e, i) => e.id).slice(0, 2));
  });

  return answer;
}
