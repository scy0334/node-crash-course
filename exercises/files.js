const fs = require("fs");

//read files
let options = {
  encoding: "utf8", // UTF-8이라는 인코딩 방식으로 엽니다
  flag: "r", // 읽기 위해 엽니다
};
fs.readFile("./docs/blog.md", "utf-8", (err, data) => {
  console.log(data);
});

//write files
fs.writeFile("./docs/blog1.txt", "heollo again", () => {
  console.log("file was written");
});

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//deleting files{
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
