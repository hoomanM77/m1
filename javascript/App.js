M.AutoInit()
$('.sidenav').sidenav({
    edge:'right'
})
$('.slider').slider({
    indicators:false,
    height:500,
    interval:5000
})
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
        data: {
            "آباده": null,
            "شیراز": null,
            "یزد": null,
            "اصفهان": null,
            "تهران": null,
            "تبریز": null,
            "مشهد": null,
            "بوشهر": null
        },
    });
});