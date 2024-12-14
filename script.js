// menu


var typed = new Typed(".typing", {
    strings: ["Web Developer", "React js Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



// progress bar

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: { gradient: ['#4070f4', '#5f80dc'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.70
});
$(".react .bar").circleProgress({
    value: 0.60
});