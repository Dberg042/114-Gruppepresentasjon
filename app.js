const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const img2 = document.querySelector('#photo2');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');



imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            img2.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

     }
});

