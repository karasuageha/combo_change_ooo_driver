var win = Titanium.UI.currentWindow;

// createSound, createImageView
var sound = Titanium.Media.createSound({
    url:'../sounds/' + win.combo + '.mp3'
});
var belt = Titanium.UI.createImageView({
	image:'../images/belt.png',
    width: 400,
});
var driver = Titanium.UI.createImageView({
	image:'../images/' + win.combo + '.png',
    width: 400,
});

// createAnimation
var anime = Titanium.UI.createAnimation({
    transform: Ti.UI.create2DMatrix({rotate: 28}),
    duration: 500,
});

// addEventListener
driver.addEventListener('click', function()
{
	sound.play();
	// pb.max = sound.duration;
    driver.animate(anime);
});

// win.add
win.add(belt);
win.add(driver);