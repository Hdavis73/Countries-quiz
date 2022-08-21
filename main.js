let score = 0
let submitBtns = Array.from(document.querySelectorAll('.submit'))
let checkedOpt = Array.from(document.querySelectorAll('input[type=radio]'))
const correct = Array.from(document.querySelectorAll('.answer'))
const optContainers = Array.from(document.querySelectorAll('.opt'))
const startBtn = document.querySelector('.start')
const restartBtn = Array.from(document.querySelectorAll('.restart'))
const failedTab = document.querySelector('.failed-tab')
const finishedTab = document.querySelector('.success-tab')


//making restart button refrsh page
for (let i = 0; i <= restartBtn.length - 1; i++) {
    restartBtn[i].addEventListener('click', () => {
        location.reload()
    })
}


//making last button say finish instead of test
submitBtns[submitBtns.length - 1].innerText = 'Finish'
submitBtns[submitBtns.length - 1].classList.add('finished')


const finishedBtn = document.querySelector('.finished')

// //go to success page on click of finished button
// finishedBtn.addEventListener('click', () => {
//     finishedBtn.parentElement.classList.toggle('hidden')
//     finishedTab.classList.toggle('hidden')
//     finishedTab.classList.toggle('active')

// })

// submitBtns[submitBtns.length-1].addEventListener('click', )

//moving from intro tab to first question
startBtn.addEventListener('click', () => {
    document.querySelector('.intro-tab').classList.toggle('hidden')
    document.querySelector('.intro-tab').nextElementSibling.classList.toggle('hidden')

})

//checking radio button when parent div is clicked
optContainers.forEach(opt => {
    opt.addEventListener('click', () => {
        opt.firstElementChild.checked = true
    })
})

//making questions move when correct and show when wrong
for (let i = 0; i <= submitBtns.length - 1; i++) {
    submitBtns[i].addEventListener('click', () => {
        if (correct[i].checked == true && !submitBtns[i].classList.contains('finished')) {
            console.log('correct')
            score += 1
            correct[i].parentElement.parentElement.parentElement.classList.toggle('answered')
            submitBtns.shift(submitBtns[i])



            setTimeout(() => {
                console.log('working')
                correct[i].parentElement.parentElement.parentElement.classList.toggle('hidden')
                correct[i].parentElement.parentElement.parentElement.classList.toggle('active')
                correct[i].parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
                correct[i].parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('active')


            }, 1000)



        } else {
            console.log('incorrect')

            if (!submitBtns[i].classList.contains('finished')) {
                checkedOpt.forEach((opt) => {
                    if (opt.checked) {
                        opt.parentElement.classList.toggle('wrong')
                        correct[i].parentElement.parentElement.parentElement.classList.toggle('answered')

                    }
                })

                setTimeout(() => {
                    correct[i].parentElement.parentElement.parentElement.classList.toggle('hidden')
                    //making the score read correctly
                    failedTab.querySelector('.score').innerText = Number(score)
                    document.querySelector('.failed-tab').classList.toggle('hidden')
                }, 1000)

            } else {
                finishedBtn.parentElement.classList.toggle('hidden')
                finishedTab.classList.toggle('hidden')
                finishedTab.classList.toggle('active')
            }


        } 
    })

}




console.log(correct)
