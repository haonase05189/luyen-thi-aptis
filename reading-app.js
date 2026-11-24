// Logic ứng dụng Reading Part 4 (multiple matching): chọn chủ đề, chọn người cho từng câu hỏi, chấm điểm
let rCurrentIndex = 0;
let rChecked = false;

const rTopicSel = document.getElementById('rTopicSel');
const rPassage = document.getElementById('rPassage');
const rQuestions = document.getElementById('rQuestions');
const rScoreBox = document.getElementById('rScore');
const rCheckBtn = document.getElementById('rCheckBtn');
const rResetBtn = document.getElementById('rResetBtn');
const rRandomBtn = document.getElementById('rRandomBtn');

readingData.forEach((topic, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = 'Bài ' + (i + 1) + ': ' + topic.topic;
  rTopicSel.appendChild(opt);
});

rTopicSel.addEventListener('change', () => {
  rCurrentIndex = parseInt(rTopicSel.value);
  rRender();
});

rRandomBtn.addEventListener('click', () => {
  let next;
  do { next = Math.floor(Math.random() * readingData.length); } while (readingData.length > 1 && next === rCurrentIndex);
  rCurrentIndex = next;
  rTopicSel.value = rCurrentIndex;
  rRender();
});

function rRender() {
  rChecked = false;
  rScoreBox.style.display = 'none';
  const topic = readingData[rCurrentIndex];

  rPassage.innerHTML = '<h3 style="margin:0 0 12px;font-size:16px;">' + topic.topic + '</h3>' +
    topic.people.map(p =>
      '<div class="rblock">' +
      '<div class="rblock-head" style="background:' + p.color + '">' + p.name + '</div>' +
      '<div class="rblock-text">' + p.text + '</div>' +
      '</div>'
    ).join('');

  rQuestions.innerHTML = topic.questions.map((item, idx) =>
    '<div class="rqrow">' +
    '<p class="rqtext"><b>' + (idx + 1) + '.</b> ' + item.q + '</p>' +
    '<select class="rselect" data-idx="' + idx + '">' +
    '<option value="">- Chọn người -</option>' +
    topic.people.map(p => '<option value="' + p.name + '">' + p.name + '</option>').join('') +
    '</select>' +
    '</div>'
  ).join('');
}

rCheckBtn.addEventListener('click', () => {
  const topic = readingData[rCurrentIndex];
  const selects = rQuestions.querySelectorAll('.rselect');
  let correct = 0;
  selects.forEach(sel => {
    const idx = parseInt(sel.dataset.idx);
    sel.classList.remove('rcorrect', 'rwrong');
    if (!sel.value) return;
    if (sel.value === topic.questions[idx].a) {
      sel.classList.add('rcorrect');
      correct++;
    } else {
      sel.classList.add('rwrong');
    }
  });
  rChecked = true;
  rScoreBox.style.display = 'block';
  rScoreBox.textContent = 'Kết quả: ' + correct + '/' + topic.questions.length + ' câu đúng';
});

rResetBtn.addEventListener('click', () => {
  rRender();
});

// ===== FORM GUIDE (Reading Part 4) =====
const rFormPanel = document.getElementById('rFormPanel');
const rFormToggleBtn = document.getElementById('rFormToggleBtn');
let rFormVisible = false;

rFormToggleBtn.addEventListener('click', () => {
  rFormVisible = !rFormVisible;
  rFormPanel.style.display = rFormVisible ? 'block' : 'none';
  rFormToggleBtn.textContent = rFormVisible ? '📖 Ẩn mẹo làm bài' : '📖 Xem mẹo làm bài Part 4';
  if (rFormVisible) {
    const f = readingForms[4];
    rFormPanel.innerHTML = '<h3 style="margin:0 0 8px;font-size:15px;">' + f.title + '</h3>' + f.html;
  }
});

rRender();
