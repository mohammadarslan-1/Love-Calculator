function checkError(){
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;

    if(name == ""){
    alert('Please enter your name');
    }
    else if (name.length <=2 ) {
    alert('Min lenght is 3')
    }
    else if(!isNaN(name)){
    alert('Numbers are not allowed');
    }
    else if(lname == ""){
    alert('Please enter your love name');
    }
    else if (lname.length <=2 ) {
    alert('Min lenght is 3')
    }
    else if(!isNaN(lname)){
    alert('Numbers are not allowed');
    }
}
function displaymassege(){
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    document.getElementById('lovevalue').value = lovdata + "%"; 
    if(lovdata > 0 && lovdata <= 30){
        alert('Sorry find someone else.');
        }
        else if(lovdata > 30 && lovdata <= 70){
        alert('Need to try some more.');
        }
        else if(lovdata > 70 && lovdata <= 95){
        alert('You are compatible.');
        }
        else if(lovdata > 95 && lovdata <= 100){
        alert('This is your true love.');
    }
}
function final(){
    checkError();
    displaymassege();
}
