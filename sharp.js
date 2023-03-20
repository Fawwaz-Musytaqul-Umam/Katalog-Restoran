const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroImagesPath = path.resolve(__dirname, 'src/public/images/heros');
const heroImageDestinationPath = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(heroImageDestinationPath)) {
    fs.mkdirSync(heroImageDestinationPath);
}

// Destination dist/images/heros/{image}
fs.readdirSync(heroImagesPath)
    .forEach((image) => {
        sharp(`${heroImagesPath}/${image}`)
            .toFile(path.resolve(
                __dirname,
                `${heroImageDestinationPath}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
            );

        sharp(`${heroImagesPath}/${image}`)
            .resize(500)
            .toFile(path.resolve(
                __dirname,
                `${heroImageDestinationPath}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`),
            );
    });
