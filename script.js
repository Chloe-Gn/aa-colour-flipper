const button = document.querySelector(".button");
const span = document.querySelector("span");
console.log(span)
console.log(button)

const cssColours = [
    'lime', 'olive', 'navy', 'teal', 'aqua', 
    'maroon', 'silver', 'gold', 'beige', 'azure', 'lavender', 'coral', 'turquoise', 
    'violet', 'indigo', 'khaki', 'plum', 'salmon', 'tan', 'crimson', 'ivory', 
    'orchid', 'chocolate', 'peachpuff', 'wheat', 'sienna', 'peru', 'rosybrown', 
    'hotpink', 'lightpink', 'deeppink', 'thistle', 'palevioletred', 'mediumvioletred', 
    'lightcoral', 'indianred', 'firebrick', 'darkred', 'snow', 'honeydew', 
    'mintcream', 'azure', 'aliceblue', 'ghostwhite', 'whitesmoke', 'seashell', 
    'beige', 'oldlace', 'floralwhite', 'ivory', 'antiquewhite', 'linen', 'lavenderblush', 
    'mistyrose', 'gainsboro', 'lightgrey', 'darkgrey', 'dimgray', 'lightslategray', 
    'slategray', 'darkslategray', 'black', 'cornsilk', 'blanchedalmond', 
    'bisque', 'navajowhite', 'wheat', 'burlywood', 'tan', 'rosybrown', 'sandybrown', 
    'goldenrod', 'darkgoldenrod', 'peru', 'chocolate', 'saddlebrown', 'sienna', 
    'brown', 'maroon', 'darkolivegreen', 'olive', 'olivedrab', 'yellowgreen', 
    'limegreen', 'lime', 'lawngreen', 'chartreuse', 'greenyellow', 'springgreen', 
    'mediumspringgreen', 'lightgreen', 'palegreen', 'darkseagreen', 'mediumseagreen', 
    'seagreen', 'forestgreen', 'green', 'darkgreen', 'yellow', 'gold', 'orange', 
    'darkorange', 'coral', 'lightcoral', 'tomato', 'orangered', 'red', 'hotpink', 
    'deeppink', 'pink', 'lightpink', 'palevioletred', 'mediumvioletred', 'violet', 
    'orchid', 'fuchsia', 'magenta', 'mediumorchid', 'mediumpurple', 'blueviolet', 
    'darkviolet', 'darkorchid', 'darkmagenta', 'purple', 'indigo', 'slateblue', 
    'darkslateblue', 'mediumslateblue', 'greenyellow', 'chartreuse', 'lawngreen', 
    'lime', 'limegreen', 'palegreen', 'lightgreen', 'mediumspringgreen', 
    'springgreen', 'mediumseagreen', 'seagreen', 'forestgreen', 'green', 'darkgreen'
  ];
  
  console.log(cssColours.length);
  
  const getRandomColour = () => {
    const i = Math.floor(Math.random() * cssColours.length +1 );
    return cssColours[i];
}


console.log(getRandomColour())



function flipColour() {
    const randomColour = getRandomColour();
    document.body.style.backgroundColor = randomColour ;
    span.innerText = randomColour;

}


button.addEventListener("click",flipColour)

// function flipColour () { document.body.style.backgroundColor};