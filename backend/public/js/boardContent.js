window.addEventListener('load', () => {
    console.log('prueba');
    const programmingForm = document.querySelector('#form');
    const programmingBtn = document.querySelector('#programming');
    const programmingDate = document.querySelector('#programming-date');
    const draftBtn = document.querySelector('#draft');
    const checkDate = document.querySelector('#check-date');
    
    programmingBtn.addEventListener('click', e => {
        e.preventDefault();
        programmingBtn.style.display = 'none';
        draftBtn.style.display = 'none';
        programmingDate.style.display = 'block';
    })
})