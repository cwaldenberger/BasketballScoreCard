

//home buttons

document.getElementById('+1home').addEventListener('click',function(){
    document.getElementById('scoreCardHome').innerText++
   
})

document.getElementById('+2home').addEventListener('click',function(){
    let addTwo = 2
    let addTwoInterger = parseInt(addTwo, 10)
    // console.log(addTwoInterger)
    let currentScore = document.getElementById('scoreCardHome').innerText
    let currentScoreInterger = parseInt(currentScore, 10)
    let newScore = currentScoreInterger + addTwoInterger
    document.getElementById('scoreCardHome').innerText = newScore
})

document.getElementById('+3home').addEventListener('click', function(){
    let addThree = 3
    let addThreeInterger = parseInt(addThree, 10)
    let currentScore = document.getElementById('scoreCardHome').innerText
    // console.log(currentScore)
    let currentScoreInterger = parseInt(currentScore, 10)
    let newScore = currentScoreInterger + addThreeInterger
    document.getElementById('scoreCardHome').innerText = newScore
})

// guest buttons

document.getElementById('+1away').addEventListener('click',function(){
    document.getElementById('scoreCardAway').innerText++
   
})

document.getElementById('+2away').addEventListener('click',function(){
    let addTwo = 2
    let addTwoInterger = parseInt(addTwo, 10)
    // console.log(addTwoInterger)
    let currentScore = document.getElementById('scoreCardAway').innerText
    let currentScoreInterger = parseInt(currentScore, 10)
    let newScore = currentScoreInterger + addTwoInterger
    document.getElementById('scoreCardAway').innerText = newScore
})

document.getElementById('+3away').addEventListener('click', function(){
    let addThree = 3
    let addThreeInterger = parseInt(addThree, 10)
    let currentScore = document.getElementById('scoreCardAway').innerText
    // console.log(currentScore)
    let currentScoreInterger = parseInt(currentScore, 10)
    let newScore = currentScoreInterger + addThreeInterger
    document.getElementById('scoreCardAway').innerText = newScore
})