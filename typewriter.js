

// const sentence = "hello there from lighthouse labs";

const typeWriter = function(words) {
  let timer = 0;
  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      process.stdout.write(words[i]);
    }, timer)
    timer += 50;;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, timer);
};


// typeWriter(sentence);
