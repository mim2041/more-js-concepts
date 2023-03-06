function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age<18){
            throw "Bacca kaccha not allowed";
        }
        else if(age > 30){
            throw 'Murubbi ra akhane asen na';
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:',err);
        errorTag.innerHTML = 'ERROR: '+ err;
    }
    finally{
        console.log('All done inside try catch');
    }
}

