 
  let url ='../Quiz.json'
  fetch(url)
  .then((response) => response.json())
  .then((quizData) => {

// ********** IDS************************************************************************
// **************************************************************************************
    const question = document.getElementById('question')
    const a = document.getElementById('a_text')
    const b = document.getElementById('b_text')
    const c = document.getElementById('c_text')
    const d = document.getElementById('d_text')
    const pre = document.getElementById('pre')
    const next = document.getElementById('next')
    const continuedata = document.getElementById('continue')
    const showscore = document.getElementById('showscore')
    const submitname = document.getElementById('sdata')
    const title = document.getElementById('title') 
    const quiz = document.getElementById("quiz")
    const quiztitle = document.getElementById("quiztitle")
    const form1 = document.getElementById("form1") 
    const s = document.getElementById("s")
    const btn2 = document.getElementById('btn-2')
    
    const answers = document.querySelectorAll('.answer')
    
    let score = 0 
    let count = 0


    quiz.style.display = "none"; 
    next.style.display = "none";
    pre.style.display = "none";

// **********Continue to game button*****************************************************
// **************************************************************************************

continuedata.addEventListener('click', ()=>{

    quiztitle.style.display = "none";
    next.style.display = "block";
    pre.style.display = "block";
    quiz.style.display = "block"; 
    mydisplayInfo()

})

    quiztitle.style.display = "none";
    form1.style.display = "block";

// **********submit ur Name button*******************************************************
// **************************************************************************************

submitname.addEventListener('click', ()=>{
    
    var name = document.getElementById("name").value;
    console.log(name,',]name');
    quiztitle.style.display = "block";
    form1.style.display = "none";
    title.innerHTML = "Welcome to Quiz" +" "+ name;

})

// console.log(name,',]name');

// **********Function for display Data***************************************************
// **************************************************************************************

    function mydisplayInfo(){
        question.innerText = quizData[count].question
        a.innerText = quizData[count].a
        b.innerText = quizData[count].b
        c.innerText = quizData[count].c
        d.innerText = quizData[count].d

    if(count === 0){
        pre.style.visibility = "hidden"; 
    }

    }
    
    function getCheckAns(){
        let answer;
        answers.forEach(AnsElement => {
            if(AnsElement.checked){
                answer = AnsElement.id
            }
        });
        return answer
    }


    var radioCheck = document.querySelectorAll('input[type="radio"]')
        console.log(radioCheck,'radio----');
        // radioCheck.forEach(value=>value.checked = false)

    // function Findselected(){
    //     var selected = document.querySelector('input[type="radio"]:checked').value
    //     console.log(selected,'selectedvalue');
    // }
    // Findselected()

    


// **********Next button*****************************************************************
// **************************************************************************************
    
    next.addEventListener('click', ()=>{
        const checkAns = getCheckAns()
        
        console.log(checkAns);
        
        // pre button local store--------------------------------------
        localStorage.setItem(quizData[count].a,checkAns);
        const ckeckItem = { ...localStorage};
        console.log(ckeckItem,'checkedd');

        
// comparing with correct ans----------------------------------------------------------

        const resultData = () =>{
            if(checkAns == quizData[count].correct){
                score++
               return 'true'
            }
            else{
                return 'false'
            }
           
        }
//adding in local storage-------------------------------------------------------------
        var result12 = resultData()
        localStorage.setItem(count,JSON.stringify(result12));
        // console.log(result12, '-->setlocal');
        const items = { ...localStorage};
        // console.log(items,'itemsss')
        const data21=  localStorage.getItem(count);
        // console.log(data21,"-->getstorage");
        // for( var x in items){
        //     console.log(items[x]);
            
        // }
        
//    --------------------------------------------------------------------------------

        count++

        if(count < quizData.length){
            quizData[count].answer
            mydisplayInfo()
        }
        else{
            quiz.style.display = "none"; 
            pre.style.display = "none"; 

            if(count === quizData.length)
            {
                btn2.style.display='none';
            }

            localStorage.clear();
     
           
            showscore.innerHTML = `
            <div class="test" id="s">
            
            <ul>
            <h2> Your score is ${score}</h2>
                <li class="scorboard">Question 1 ${items[0]}</li>
                <li class="scorboard">Question 2 ${items[1]}</li>
                <li class="scorboard">Question 3 ${items[2]}</li>
                <li class="scorboard">Question 4 ${items[3]}</li>
            <button onclick="location.reload()" class="bttn">cleare score</button>
            </ul>
            
        
            </div>
            `;
        }
    
        if(count >= quizData.length){
            
            next.style.visibility = "hidden";
        }
    
        if(count !=0){
    
            pre.style.visibility = "visible";
        }
        console.log(count,0000);

    })
    
// **********previous button*************************************************************
// **************************************************************************************
    pre.addEventListener('click',()=>{
        count--
        if(count < quizData.length){
            mydisplayInfo()
            next.style.visibility = "visible";
            // s.style.display = "none";
        }
        
        var preItemSelect=  localStorage.getItem(quizData[count].a);
        console.log(preItemSelect,"previous data from local");
        // preItemSelect.forEach(value=>console.log(value,'ddddddddd'))
         
     
        })
    
  })

  
  
      
  //..dygwjehgjgwjhgywj