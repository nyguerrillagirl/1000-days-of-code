import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width: 576,
    height: 324,
    letterbox: true,
    global: false,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later

k.loadSprite("sky", "./images/1.png");
k.loadSprite("clouds", "./images/2.png");
k.loadSprite("far-field", "./images/3.png");
k.loadSprite("near-field", "./images/4.png");

const IMAGE_WIDTH = 576;

k.add([k.sprite("sky"), k.pos(0, 0)]);

const layers = [
    {
        speed: -20,
        parts: [
            k.add([k.sprite("clouds"), k.pos(0, 0)]),
            k.add([k.sprite("clouds"), k.pos(IMAGE_WIDTH, 0)]),
        ]
    }
]

k.onUpdate(() => {
  for (const layer of layers) {
    if (layer.parts[1].pos.x < 0) {
      layer.parts[0].moveTo(layer.parts[1].pos.x + IMAGE_WIDTH, 0);
      layer.parts.push(layer.parts.shift());
    }

    layer.parts[0].move(layer.speed, 0);
    layer.parts[1].move(layer.speed, 0);
  }
});