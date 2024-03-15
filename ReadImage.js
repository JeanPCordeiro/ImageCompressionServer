const sharp = require("sharp");

async function getMetadata() {
  try {
    const metadata = await sharp("initial.png").metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

async function resizeImage() {
    try {
      await sharp("initial.png")
        .resize({
          width: 1024,
          height: 768
        })
        .toFile("initial-resized.png");
    } catch (error) {
      console.log(error);
    }
  }


async function compressJPEG() {
    try {
      await sharp("initial.png")
        .resize({
          width: 1024,
          height: 768
        })
        .toFormat("jpeg", { mozjpeg: true })
        .toFile("initial-resized-compressedJPEG.jpeg");
    } catch (error) {
      console.log(error);
    }
  }

  async function compressPNG() {
    try {
      await sharp("initial.png")
        .resize({
          width: 1024
//          height: 768
        })
        .toFormat("png", { colors:50 })
        .toFile("initial-resized-compressedPNG.png");
    } catch (error) {
      console.log(error);
    }
  }


getMetadata();
resizeImage();
compressJPEG();
compressPNG();