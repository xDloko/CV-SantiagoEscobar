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


const references = document.querySelector('.references');
const reference = document.querySelector('.reference');
const iconreference = document.querySelector('.reference_i');

references.addEventListener('click', () => {
    reference.classList.toggle('open');
    iconreference.classList.toggle('rotate');
});

