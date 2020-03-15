
$(".box").delay(2000).queue(function(){
    $(this).css('height', '50').dequeue();
});

$(".full").delay(2000).queue(function(){
    $(this).css('height', '50').dequeue();
});
