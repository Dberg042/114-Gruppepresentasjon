const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const img2 = document.querySelector('#photo2');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

/*hvis brukeren hover på img div*/

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

// hvis vi hover ut fra img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



//når vi velger et bilde å laste opp

file.addEventListener('change', function(){

    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            img2.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);


    }
});

