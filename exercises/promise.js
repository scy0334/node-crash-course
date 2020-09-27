// 1. Promise 예시

const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = () => {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
};

// printAll();

// 2. Promise Hell
const isEven = (n) => {
  return n % 2 === 1 ? false : true;
};

function gotoCodestates() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1. go to codestates");
    }, 500);
  });
}

function sitAndCode(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2. sit adn code");
    }, 200);
  });
}

function eatLunch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3. eat lunch");
    }, 300);
  });
}

function goToBed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4. goToBed");
    }, 200);
  });
}

// gotoCodestates().then((data) => {
//   console.log(data);

//   sitAndCode().then((data) => {
//     console.log(data);

//     eatLunch().then((data) => {
//       console.log(data);

//       goToBed().then((data) => {
//         console.log(data);
//       });
//     });
//   });
// });

// 3. Promise Chaining

// gotoCodestates()
//   .then((data) => {
//     console.log(data);
//     return sitAndCode();
//   })
//   .then((data) => {
//     console.log(data);
//     return eatLunch();
//   })
//   .then((data) => {
//     console.log(data);
//     return goToBed();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 4. Async Await
const result = async () => {
  const one = await gotoCodestates();
  console.log(one);

  const two = await sitAndCode();
  console.log(two);

  const three = await eatLunch();
  console.log(three);

  const four = await goToBed();
  console.log(four);
};

result();
