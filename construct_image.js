function constructImage(daysAgo) {
  var img = document.createElement("image");
  img.src = strips[daysAgo];
  img.id = 'strip';
  return img;
}
