let num = 0;
const IntervalId = setInterval( () => {
    ++num;
    },1000);
    

function count(num){

    const countField = document.getElementById('count');
    const count = countField.innerText;
    document.getElementById('btn-start').addEventListener('click',function(){
        countField = num;
    });

    document.getElementById('btn-stop').addEventListener('click',function(){
        clearInterval(IntervalId);
    })
    
    document.getElementById('btn-reset').addEventListener('click',function(){
        count = 0;
    })

}

count(num);