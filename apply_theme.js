// get body element
// add script to head

// var head = document.getElementsByTagName('head')[0];
// head += '<script src="stripe-gradient.js"></script>'

var body = document.getElementsByTagName('body')[0];
// add canvas as child to body
body.innerHTML += '<canvas id="grad-bg"></canvas>'

new Gradient({
    canvas: '#grad-bg', 
    colors: [
        '#C0C0BE', '#FFFFFF', '#535353', '#566463',
        // '#a960ee', '#ff333d', '#90e0ff', '#ffcb57'
    ]
});