$(document).ready(function(){
    console.log("ready");   

    $(".pauley").click(function(){
        $(".pauley").toggleClass("pauley-zoom");
        $(".map").toggleClass("map-zoom");
        console.log("click");
    })
})