// Each frame is "Name of png", then coords of each icon sequenually
const frameData = {

  // Pales
  pale1: [
    [194, 166],
    [345, 166],
  ],
  pale2: [
    [195, 166],
    [344, 166],
  ],
  palebreak1: [
    [184, 166],
    [355, 166],
  ],
  palebreak2: [
    [164, 166],
    [375, 166],
  ],

  // Spades
  spade1: [
    [181, 208],
    [349, 208],
  ],
  spade2: [
    [180, 208],
    [350, 208],
  ],
  spadebreak1: [
    [169, 208],
    [356, 208],
  ],
  spadebreak2: [
    [150, 208],
    [377, 208],
  ],

  // Hearts
  heart1: [
    [169, 60],
    [359, 60],
  ],
  heart2: [
    [170, 60],
    [358, 60],
  ],
  heartbreak1: [
    [158, 60],
    [381, 60],
  ],
  heartbreak2: [
    [138, 60],
    [400, 60],
  ],

  // Clubs
  club1: [
    [168, 208],
    [355, 208],
    [260, 45],
  ],
  club2: [
    [167, 208],
    [356, 208],
    [260, 44],
  ],
  clubbreak1: [
    [157, 208],
    [365, 208],
    [260, 40],
  ],
  clubbreak2: [
    [137, 208],
    [385, 208],
    [260, 21],
  ],

  
  transition: [
    [142, 149],
    [386, 149],
  ],
}

const animationData = {
  pale: ["pale1", "pale2"],
  spade: ["spade1", "spade2"],
  heart: ["heart1", "heart2"],
  club: ["club1", "club2"],

  heartspade: [
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "heartbreak2", "heartbreak1",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "spadebreak2", "spadebreak1",
  ],
  spadeclub: [
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "clubbreak2", "clubbreak1",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "clubbreak1", "clubbreak2",
    "spadebreak2", "spadebreak1",
  ],
  heartpale: [
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "pale1", "pale2",
    "pale1", "pale2",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
    "heartbreak2", "heartbreak1",
  ],

  heartpalespade: [
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
    "spadebreak2", "spadebreak1",
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
    "heartbreak2", "heartbreak1",
  ],

  heartspadeclub: [
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "spadebreak2", "spadebreak1",
    "spadebreak1", "spadebreak2",
    "clubbreak2", "clubbreak1",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "clubbreak1", "clubbreak2",
    "spadebreak2", "spadebreak1",
    "spadebreak1", "spadebreak2",
    "heartbreak2", "heartbreak1",
  ],

  heart2ash: [
    "heartbreak2", "heartbreak1",
    "heart1", "heart2",
    "heart1", "heart2",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
    "spadebreak2", "spadebreak1",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "clubbreak2", "clubbreak1",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "club1", "club2",
    "clubbreak1", "clubbreak2",
    "spadebreak2", "spadebreak1",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
  ],

  loop: [
    "heartbreak2", "heartbreak1",
    "heart1", "heart2",
    "heartbreak1", "heartbreak2",
    "palebreak2", "palebreak1",
    "pale1", "pale2",
    "palebreak1", "palebreak2",
    "spadebreak2", "spadebreak1",
    "spade1", "spade2",
    "spadebreak1", "spadebreak2",
    "clubbreak2", "clubbreak1",
    "club1", "club2",
    "clubbreak1", "clubbreak2",
  ]
}

const canvas = document.querySelector("#canvasGenerator")
const ctx = canvas.getContext("2d");

// Image uploading
document.querySelectorAll(".fileUpload").forEach(e => {
  const imageElement = document.getElementById(e.id.replace("input", "charImg"))
  e.onchange = event => {
    const [file] = e.files
    if (file) {
      imageElement.src = URL.createObjectURL(file)
    }
  }
  
  // Do this on startup as well
  const [file] = e.files
  if (file) {
    imageElement.src = URL.createObjectURL(file)
  }
})

//https://stackoverflow.com/questions/46399223/async-await-in-image-loading
function onload2promise(obj, frameName){
  return new Promise((resolve, reject) => {
      obj.onload = () => {
        resolve(obj);
        console.log(frameName + " Loaded")
      }
      obj.onerror = reject;
  });
}


function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let createGif = async () => {

  // Get Animation & icons
  const selectedAnimationName = document.getElementById("gifSelect").value
  const selectedAnimation = animationData[selectedAnimationName]

  const char1 = document.getElementById("charImg1")
  const char2 = document.getElementById("charImg2")
  const char3 = document.getElementById("charImg3")

  const chars = [char1, char2, char3]

  // Load all backgrounds
  // - For some reaosn awaiting while gif is an active element breaks it, so this is the solution
  let backgrounds = []
  let promises = []
  selectedAnimation.forEach(async frameName => {
    const img = new Image()
    img.src = `./assets/${frameName}.png`
    backgrounds.push(img)
    promises.push(onload2promise(img, frameName))
  })

  await Promise.all(promises);

  var gif = new GIF({
    workers: 2,
    quality: 10
  });

  // Generate each animation frame
  selectedAnimation.forEach(async (frameName, index) => {
    
    let currentFrameData = frameData[frameName]

    // White background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 650, 450);

    // Draw Characters
    currentFrameData.forEach((coords, i) => {
      ctx.drawImage(
        chars[i], 
        coords[0], coords[1],
        120, 120)
    })

    // Draw background
    ctx.drawImage(backgrounds[index], 0, 0, 650, 450);

    // Final: add to gif
    gif.addFrame(canvas, {copy: true, delay: 50});

  });

  gif.render()
  gif.on('finished', finishGif)
}

const finishGif = blob => {
  const result = document.getElementById('finalOutput')
  result.src = URL.createObjectURL(blob)
}