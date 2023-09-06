window.addEventListener('load', () => {
    console.log('prueba');
    const programmingForm = document.querySelector('#form');
    const programmingBtn = document.querySelector('#programming');
    const programmingDate = document.querySelector('#programming-date');
    const draftBtn = document.querySelector('#draft');
    const checkDate = document.querySelector('#check-date');
    
    draftBtn.addEventListener('click', e => {
        e.preventDefault();
    })

    programmingBtn.addEventListener('click', e => {
        e.preventDefault();
        programmingBtn.style.display = 'none';
        programmingDate.style.display = 'block';
        checkDate.style.display = 'block';
    })

    programmingDate.addEventListener('input', e => {
        let length = e.target.value.length;
        let today = new Date();
        let formattedDate = e.target.value;
        console.log(formattedDate);
        
        if(length === 0){
            console.log('No se puede enviar vacio');
        } else if (today > formattedDate){
            console.log('La fecha debe ser mayor a hoy');
        }
        else {
            console.log('todo listo para enviar');
            // programmingForm.submit();
        }

    })
})