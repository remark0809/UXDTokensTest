//コンパクト、ルーズ、ノーマルモード切替
const normalBtn = document.getElementById('theme-normal');
const compactBtn = document.getElementById('theme-compact');
const looseBtn = document.getElementById('theme-loose');
const lightBtn = document.getElementById('theme-light');
const darkBtn = document.getElementById('theme-dark');

normalBtn.addEventListener('click', function(){
  document.body.setAttribute('theme', 'normal');
});

compactBtn.addEventListener('click', function(){
  document.body.setAttribute('theme', 'compact');
});

looseBtn.addEventListener('click', function(){
  document.body.setAttribute('theme', 'loose');
});

lightBtn.addEventListener('click', function(){
  document.body.setAttribute('theme', 'light');
});

darkBtn.addEventListener('click', function(){
  document.body.setAttribute('theme', 'dark');
});