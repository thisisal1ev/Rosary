const elSelect = document.querySelector('#select');
const elZikrText = document.querySelector('#zikr');
const elCounter = document.querySelector('#counter');
const elCount = document.querySelector('#count');
const elReset = document.querySelector('#reset');

elSelect.addEventListener('change', function () {
  elZikrText.textContent = elSelect.value;
  elCounter.disabled = false;
  elCount.textContent = 0;
});

elCounter.addEventListener('click', function () {
  elCount.textContent = +elCount.textContent + 1
});

elReset.addEventListener('click', function () {
  elZikrText.textContent = "Iltimos aytmoqchi bo'lgan zikrni tanlang :("
  elCount.textContent = 0;
  elCounter.disabled = true;
  elSelect.value = 'Zikrni tanlang';
});