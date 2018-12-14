var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  h1.style.backgroundColor = "steelblue";
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++)
  {
    if(colors[i])
    {
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }

})

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  h1.style.backgroundColor = "steelblue";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++)
  {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";

  }

})

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;

  messageDisplay.textContent ="";
  //change color of squares
  for(var i=0; i<squares.length; i++)
  {
    squares[i].style.backgroundColor = colors[i];
  }

  h1.style.backgroundColor = "steelblue";

  this.textContent = "NEW COLOR";

})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare it with value of pickedColor
      if(clickedColor === pickedColor)
      {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY AGAIN?"
      }
      else {
        //if different change color of square to background color
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }

  })
}

function changeColors(color)
{
  for(var i=0; i<squares.length; i++)
  {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor()
{
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num)
{
  //make an array
  var arr = [];
  //add num random color to array
  for(var i=0; i<num; i++)
  {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor()
{
  //pick a "red" from 0 to 255
  var r =  Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g =  Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b =  Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " +  b + ")";
}
