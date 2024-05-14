const btnResolve = document.querySelector('.btn-promise')
const btnReject = document.querySelector('.btn-reject')
const p = new Promise((resolve , reject)=>{
    btnResolve.addEventListener('click',()=>{
        resolve("Resolve by clicking the button")
        console.log(p)
        })
        btnReject.addEventListener('click',()=>{
            reject("Reject by clicking the button")
            console.log(p)
            })
})

p.then(()=>{
    console.log("Promise resolved!")
}).catch(()=>{
    console.log("Promise rejected")
})

