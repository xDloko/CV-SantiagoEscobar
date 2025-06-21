const hided = document.querySelector('.hided');
const exp = document.querySelector('.exp');
const iconexp = document.querySelector('.exp_i');

hided.addEventListener('click', () => {
    exp.classList.toggle('open');
    iconexp.classList.toggle('rotate');
});

const skills = document.querySelector('.skills');
const skill = document.querySelector('.skill');
const iconskill = document.querySelector('.skill_i');

skills.addEventListener('click', () => {
    skill.classList.toggle('open');
    iconskill.classList.toggle('rotate');
});

const academics = document.querySelector('.academics');
const academic = document.querySelector('.academic');
const iconacademic = document.querySelector('.academic_i');

academics.addEventListener('click', () => {
    academic.classList.toggle('open');
    iconacademic.classList.toggle('rotate');
});

document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'CV Santigo-E.C.pdf'; // cambia esto a tu archivo real
    link.download = 'SEC-CV.pdf'; // nombre con el que se descargará
    link.click();
  });