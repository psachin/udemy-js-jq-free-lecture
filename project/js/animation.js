$(document).ready(function(){
    $('li.fields').filter(':nth-child(n+3)').addClass('hide');
    // what is .filter(:nth-child(n+3))?
    // Ans: select the next 3 element from current DOM
    // Example:
    // li                      ->   li -> li
    // present(and also 3rd)   ->   1  -> 2
    $('ul').on('click','li.title',function(){
	$(this).next().slideDown(200).siblings('li.fields').slideUp(200);
	// if li.title is current element, li.field will be the next element
	// if next element will slidedown, all other siblings will slideup
    });
});
