function shuffleArray(footballers) {
  footballers = JSON.parse(footballers);
  for (let i = footballers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let aux = footballers[i];
    footballers[i] = footballers[j];
    footballers[j] = aux;
  }
  return footballers;
}

export default shuffleArray;
