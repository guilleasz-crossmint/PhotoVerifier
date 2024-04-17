import fs from "fs";

export const savePhoto = (photoBase64) => {
  const base64Data = photoBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  // Define the output file path
  const outputFile = `./public/gallery/photo-${new Date().getTime()}.png`;

  // Write the data to a file
  fs.writeFileSync(outputFile, buffer);
};

export const getPhotos = () => {
  return fs.readdirSync("./public/gallery");
};
