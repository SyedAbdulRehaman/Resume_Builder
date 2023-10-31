// alert("loading");
function addNewWEField()
{
    let newWEField = document.createElement('textarea');
    newWEField.classList.add('form-control');
    newWEField.classList.add('wefield');
    newWEField.classList.add('mt-2');

    newWEField.setAttribute('placeholder', 'Enter ur text');

    newWEField.setAttribute('rows', '3');

    let we=document.getElementById('we');
    let WAddButton=document.getElementById('WAddButton');
    we.insertBefore(newWEField,WAddButton);

    
}

function addNewAQField()
{
    let newAQField = document.createElement('textarea');
    newAQField.classList.add('form-control');
    newAQField.classList.add('eqfield');
    newAQField.classList.add('mt-2');

    newAQField.setAttribute('placeholder', 'Enter ur text');

    newAQField.setAttribute('rows', '3');

    let aq=document.getElementById('aq');
    let AQAddBuuton=document.getElementById('aqAddButton');
    aq.insertBefore(newAQField,AQAddBuuton);
}

//generate cv

function generateCV()
{
    let name=document.getElementById('namefield').value;
    // let nameT1=document.getElementById('nameT');
    // nameT1.innerHTML=name;
    document.getElementById('name2').innerHTML=name;
    let contact=document.getElementById('contactfield').value;
    document.getElementById('contactT').innerHTML=contact;
    let address=document.getElementById('addressfield').value;
    document.getElementById('addressT').innerHTML=address;
    let objective=document.getElementById('objectivefield').value;
    document.getElementById('objT').innerHTML=objective;
    // let experience=document.getElementById('experiencefield').value;

    let wef=document.getElementsByClassName('wefield');

    document.getElementById('fb1').innerHTML=document.getElementById('fbfield').value;

    document.getElementById('insta1').innerHTML=document.getElementById('instafield').value;

    document.getElementById('linked1').innerHTML=document.getElementById('linkedfield').value;

    document.getElementById('emailT').innerHTML=document.getElementById('emailfield').value;



    let aqf=document.getElementsByClassName('eqfield');
    //we
    let s=''
    for(let e of wef){
        s+=`<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=s;

    let s1=''
    for(let e of aqf){
        s1+='<li>'+e.value+'</li>';
    }
    document.getElementById('aqT').innerHTML=s1;

    document.getElementById('resumeform').style.display='none';
    document.getElementById('resume-template').style.display='block';

}

const photoInput = document.getElementById('photo-input');
const previewImage = document.getElementById('pre-img');

// Add an event listener to the input element for changes
photoInput.addEventListener('change', function() {
    const file = photoInput.files[0];

    if (file) {
        // Create a FileReader to read the selected file
        const reader = new FileReader();

        // Set up the FileReader to display the image when it's loaded
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    }
});




function printCV()
{
    window.print();
}