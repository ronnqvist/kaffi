function constructImage(daysAgo) {
  if (daysAgo < strips.length) {
    var img = document.createElement("image");
    img.src = strips[daysAgo];
    img.id = 'strip';
    return img;
  } else {
    var message = document.createElement("p");
    message.id = 'strip';
    message.innerHTML = 'För äldre Kaffi-strippar, se <a href="http://serier.nu/kaffi/" target="_blank">arkivet</a>.';
    return message;
  }
}
