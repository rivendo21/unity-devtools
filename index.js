// For the description you will need to add a "description" field to each item in the data array, same for the image.

const data = [
  {
    title: "GIF to MP4 Converter",
    url: "https://tools.unitycoder.com/GIF2MP4/",
    category: "Converter",
  },
  {
    title: "Registry Hex String Converter",
    url: "https://tools.unitycoder.com/RegistryHexStringConverter/",
    category: "Converter",
  },
  {
    title: "WEBP to PNG Converter",
    url: "https://tools.unitycoder.com/webp2png/",
    category: "Converter",
  },
  {
    title: "Convert 16x16 image into Colored Block Symbols",
    url: "https://tools.unitycoder.com/16x16ImageToColorSymbols/",
    category: "Converter",
  },
  {
    title: "Finnish VirtuaaliViivakoodi to Viivakoodi (kuva)",
    url: "https://tools.unitycoder.com/VirtuaaliViivakoodi2Viivakoodi/",
    category: "Converter",
  },
  {
    title: "Convert UTF Symbol To PNG or SVG Image",
    url: "https://tools.unitycoder.com/UTFSymbolToImage/",
    category: "Converter",
  },
  {
    title: "Image To Depth and Normal Map",
    url: "https://tools.unitycoder.com/Image2DepthAndNormalMap/",
    category: "Converter",
  },
  {
    title: "Array To Gradient PNG",
    url: "https://tools.unitycoder.com/Array2GradientPNG/",
    category: "Generator",
  },
  {
    title: "Generate 3D LUT PNG From Gradient",
    url: "https://tools.unitycoder.com/FastQRCodeGenerator/",
    category: "Generator",
  },
  {
    title: "QRCode Generator",
    url: "https://tools.unitycoder.com/QRCodeGeneratorFree/",
    category: "Generator",
  },
  {
    title: "Grayscale Random Noise Texture Generator",
    url: "https://tools.unitycoder.com/RandomNoiseTextureGenerator/",
    category: "Generator",
  },
  {
    title: "Visual Studio Snippets Generator Online",
    url: "https://tools.unitycoder.com/VisualStudioSnippetsGenerator/",
    category: "Generator",
  },
  {
    title: "Random Pixel Art Grass Tile Generator",
    url: "https://tools.unitycoder.com/RandomPixelArtTileGenerator/",
    category: "Generator",
  },
  {
    title: "Rounded Rectangle PNG Generator",
    url: "https://tools.unitycoder.com/LineGenerator/",
    category: "Generator",
  },
  {
    title: "Beveled Line Generator (PNG)",
    url: "https://tools.unitycoder.com/BeveledLineGenerator/",
    category: "Generator",
  },
  {
    title: "Brushed Metal Texture Generator",
    url: "https://tools.unitycoder.com/BrushedMetalTextureGenerator/",
    category: "Generator",
  },
  {
    title: "Glitter/Sparkles Texture Generator",
    url: "https://tools.unitycoder.com/GlitterTextureGenerator/",
    category: "Generator",
  },
  {
    title: "Star Icon/Symbol Image Generator",
    url: "https://tools.unitycoder.com/StarIconGenerator/",
    category: "Generator",
  },
  {
    title: "3D Hollow Cylinder Ring Generator",
    url: "https://tools.unitycoder.com/3DHollowCylinderRingGenerator/",
    category: "Generator",
  },
  {
    title: "Animated Sprite Sheet Generator",
    url: "https://tools.unitycoder.com/AnimatedSpriteSheetGenerator/",
    category: "Generator",
  },
  {
    title: "AssetStudio Sprite Recolor From Palette",
    url: "https://tools.unitycoder.com/AssetStudioSpriteRecolorFromPalette/",
    category: "Tools",
  },
  {
    title: "Combine 2 Text Lists by Rows, with Custom Separator String",
    url: "https://tools.unitycoder.com/CombineTextListsWithCustomSeparator/",
    category: "Tools",
  },
  {
    title: "Remove Line Numbers from Each Text Row",
    url: "https://tools.unitycoder.com/RemoveLineNumbersFromTextRows/",
    category: "Tools",
  },
  {
    title: "Simple Image Resizer Tool in Browser",
    url: "https://tools.unitycoder.com/SimpleImageResizeInBrowser/",
    category: "Tools",
  },
  {
    title: "Unity Animation Clip Batch Add From Excel",
    url: "https://tools.unitycoder.com/UnityAnimationClipBatchAddFromExcel/",
    category: "Tools",
  },
  {
    title: "View 2 URLs side-by-side",
    url: "https://tools.unitycoder.com/sidebyside/",
    category: "Tools",
  },
  {
    title: "Compare/Diff Script side-by-side",
    url: "https://tools.unitycoder.com/CompareCode/",
    category: "Tools",
  },
  {
    title: "Extract Text from Image (OCR)",
    url: "https://tools.unitycoder.com/ImageOCR/",
    category: "Tools",
  },
  {
    title: "Unity New Forum Fixer (improve UI/UX)",
    url: "https://unitycoder.com/blog/2024/09/23/greasemonkey-unity-forum-fixer/",
    category: "browserplugins",
  },
  {
    title: "itch.io Better Pixel Art Viewer",
    url: "https://unitycoder.com/blog/2021/10/09/greasemonkey-better-pixel-art-viewer-for-itch-io/",
    category: "browserplugins",
  },
  {
    title: 'Display "Unity Version Added" info in API Docs',
    url: "https://unitycoder.com/blog/2023/03/07/greasemonkey-display-unity-version-added-info-in-api-docs/",
    category: "browserplugins",
  },
  {
    title: "Trello Checklist Exporter (to .txt)",
    url: "https://gist.github.com/unitycoder/86968ebaaafac9ed9a609c0f41dbeedc",
    category: "browserplugins",
  },
  {
    title: "YouTube Screenshot Capture with OCR (Code to Text on clipboard)",
    url: "https://gist.github.com/unitycoder/b8f7245dc9146b6a9f8053d461b068ba",
    category: "browserplugins",
  },
  {
    title: "Heart Rate Monitor (using webcam)",
    url: "https://tools.unitycoder.com/HeartRateMonitor/",
    category: "browserplugins",
  },
];

const categories = [...new Set(data.map((item) => item.category))];

categories.forEach((category) => {
  const categoryData = data.filter((item) => item.category === category);
  const gridElement = document.getElementById(`${category.toLowerCase()}-grid`);

  categoryData.forEach((item) => {
    const card = document.createElement("a");
    card.href = item.url;
    card.className = "card";
    const cardImage = document.createElement("div");
    cardImage.className = "card-image";
    cardImage.style.backgroundImage = `url(${item.image || "image placeholder"})`;

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.title;

    const cardDesc = document.createElement("p");
    cardDesc.className = "card-description";

    cardDesc.textContent = item.description || "description placeholder";

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDesc);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    gridElement.appendChild(card);
  });
});
