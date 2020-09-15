// 先加入這行:  var logger = console.log.bind(window), 之後就不要用console.log; 
// 全部print，log時用logger(msg)這樣的語法

//面試：解決過的問題！！
// Q1 為什麼要將console.log交給window object
// A1: 是讓console.log的來源都是來自window這個object
// 這只能說是經驗, 以前弄過Chrome, Safari, firefox這些遊覽器; 
// 以前寫var logger = console.log; 在Safari會死掉
// A2: 通常會寫成var logger = PRODUCTION ? function(){} : console.log.bind(window)
// 意思是我的web在release給客人時盡量不要print出一些debug message

import './main.scss'

var logger=console.log.bind(window)
logger('web-dev-server done')

class App{
    constructor(){
        logger("I was born second time")
    }
}
var app1=new App()
//實例生成的時候，constructor就執行了

//測試babel
const foo=(name)=>{
    console.log(`I am ${name}`)
}
foo('kiki')


