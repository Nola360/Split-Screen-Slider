//document function
document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  //Variable coordinates
  let skew = 0;
  let delta = 0;

  //Controls position of handle and background transition point
  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', function (e) {
    //controls the position of handle
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    //Controls the handle and window movement
    handle.style.left = e.clientX + delta + 'px';
    // console.log(e.clientX);

    //Controls the handle movement
    topLayer.style.width = e.clientX + skew + delta + 'px';
  });
});

