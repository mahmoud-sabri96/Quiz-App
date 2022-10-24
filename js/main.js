import { Settings } from './Settings.js'

let settings = new Settings();


var bodyDom = document.querySelector("body");





$("#fullBtn ,#exitFullBtn").click(function () {
    console.log("545")
    if (document.fullscreenElement) {
        // $(".fullScreenBtn").html(`<i class="fa-solid fa-up-right-and-down-left-from-center"></i>`)
        $(".fa-minimize").fadeOut(400, function () {
            $(".fa-up-right-and-down-left-from-center").fadeIn(200)
        })
        document.exitFullscreen()
    } else {
        // $(".fullScreenBtn").html(`<i class="fa-solid fa-minimize"></i>`)
        $(".fa-up-right-and-down-left-from-center").fadeOut(400, function () {
            $(".fa-minimize").fadeIn(200)
        })
        bodyDom.requestFullscreen()
    }
})

