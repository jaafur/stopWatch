let mseconds = document.querySelector('.mseconds')
let seconds = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')
let hours = document.querySelector('.hours')
let startBtn = document.querySelector('.start')
let puaseBtn = document.querySelector('.pause')
let resetBtn = document.querySelector('.reset')
let ms1 = 0
let ms2 = 0
let ms3 = 0
let s1 = 0
let s2 = 0
let m1 = 0 
let m2 = 0
let h1 = 0
let h2 = 0

startBtn.addEventListener('click',()=>{
     startInterval = setInterval(() => {
   
        ms1 = parseInt(mseconds.innerText.split('')[2])+1
        mseconds.innerHTML = `${ms3}${ms2}${ms1}`
        if (ms1 > 9) {
            ms1 = 0
            ms2 = parseInt(mseconds.innerText.split('')[1])+1
            mseconds.innerHTML = `${ms3}${ms2}${ms1}`
            if (ms2 > 9) {
                ms1 = 0
                ms2 = 0
                ms3= parseInt(mseconds.innerText.split('')[0])+1 
                mseconds.innerHTML = `${ms3}${ms2}${ms1}`
                if (ms3>9) {
                    ms1 , ms2 ,ms3 = 0
                    mseconds.innerHTML = `${ms3}${ms2}${ms1}`
                    s1 = parseInt(seconds.innerText.split('')[1]) + 1
                    seconds.innerHTML = `${s2}${s1}`
                    if (s1>9) {
                        s1 = 0
                        s2 = parseInt(seconds.innerText.split('')[0]) + 1
                        seconds.innerHTML = `${s2}${s1}`
                        if (s2 > 5) {
                            s2 = 0
                            s1 =0
                            seconds.innerHTML = `${s2}${s1}`
                            m1 = parseInt(minutes.innerHTML.split('')[1]) +1
                            minutes.innerHTML = `${m2}${m1}`
                            if (m1>9) {
                                m1 = 0
                                m2 = parseInt(minutes.innerHTML.split('')[0]) +1
                                minutes.innerHTML = `${m2}${m1}`
                                if (m2 > 5) {
                                    m1 =0 
                                    m2 =0 
                                    minutes.innerHTML = `${m2}${m1}` 
                                    h1 = parseInt(hours.innerHTML.split('')[1]) +1
                                    hours.innerHTML = `${h2}${h1}`
                                    if (h1>9) {
                                        h1 = 0
                                        h2 = parseInt(hours.innerHTML.split('')[0]) +1
                                        hours.innerHTML = `${h2}${h1}`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
     
       
    },1);
    puaseBtn.addEventListener('click',()=>{
        clearInterval(startInterval)
      
    })
  
    
})
resetBtn.addEventListener('click',()=>{
    mseconds.innerText ='000'
    seconds.innerText ='00'
    minutes.innerText = '00'
    hours.innerText = '00'
    clearInterval(startInterval)
 })



