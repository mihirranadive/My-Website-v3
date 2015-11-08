/*jslint nomen: true, undef: true, sloppy: true, white:true*/


function setTitleText()
{
    var timeNow = new Date();
    var eveTime = new Date();
    eveTime.setHours(18);
    eveTime.setMinutes(0);
    if(timeNow>eveTime)
        document.getElementById("tabtitle").innerHTML = "carpe nectum";
    else
        document.getElementById("tabtitle").innerHTML = "carpe diem";
}

//window height and widht
var win_Width = 0,
    win_Height = 0;

// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all ? true : false;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) {
    document.captureEvents(Event.MOUSEMOVE);
}

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMousepos;
//document.onmousemove = getRelativeMouseposXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

// Main function to retrieve mouse x-y pos.s
/*
function getMouseXY(e) 
{
    if (IE) 
    { // grab the x-y pos.s if browser is IE
        tempX = event.clientX + document.body.scrollLeft;
        tempY = event.clientY + document.body.scrollTop;
    } 
    else 
    {  // grab the x-y pos.s if browser is NS
        tempX = e.pageX;
        tempY = e.pageY;
    }  
    // catch possible negative values in NS4
    if (tempX < 0){tempX = 0;}
    if (tempY < 0){tempY = 0;}  
    // show the position values in the form named Show
    // in the text fields named MouseX and MouseY
    document.Show.MouseX.value = tempX;
    document.Show.MouseY.value = tempY;
}
*/

function getMousepos(e) {
    var x = 0,
        y = 0;
    x = getMouseX(e);
    y = getMouseY(e);
    document.Show.MouseX.value = x;
    document.Show.MouseY.value = y;
    //getWindowWidht(e);
    imageSwitcher(x, y);
}

function getMouseX(e) {
    if (IE) {
        tempX = event.clientX + document.body.scrollLeft;
    } else {
        tempX = e.pageX;
    }
    //catch exceptions
    if (tempX < 0) {
        tempX = 0;
    }
    return tempX;
}

function getMouseY(e) {
    if (IE) {
        tempY = event.clientY + document.body.scrollTop;
    } else {
        tempY = e.pageY;
    }
    //catch exceptions
    if (tempY < 0) {
        tempY = 0;
    }
    return tempY;
}

function getWindowWidht(e) {
    win_Width = window.innerWidth;
    win_Height = window.innerHeight;
    //document.Show.Win_size.value = win_Height;
    //document.Show.Win_size.value = win_Widht;
}



function imageSwitcher(x, y) {

    var imgvar = document.getElementById("iSelfie");
    //depending on the values of X and Y giving the mouse poistion on thepage, this function selects the appropriate image.
    //top left
    if (x < 12 && y < 30) {
        //point to top left image
        document.getElementById("demo").innerHTML = "Top Left";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/top-left.jpg";
    }
    //top
    else if ((x > 12 && x < 162) && y < 30) {
        //point to top image
        document.getElementById("demo").innerHTML = "Top";
        document.getElementById("iSelfie").src = "../Images/iSelfieImages/Top.jpg";
    }
    //top right
    else if (x > 162 && y < 30) {
        document.getElementById("demo").innerHTML = "Top Right";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/top-right.jpg";
    }
    //right
    else if (x > 162 && (y > 30 && y < 240)) {
        document.getElementById("demo").innerHTML = "Right";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/right.jpg";
    }
    //bottom right
    else if (x > 162 && y > 240) {
        document.getElementById("demo").innerHTML = "Bottom Right";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/bottom-right.jpg";
    }
    //bottom
    else if ((x > 12 && x < 162) && y > 240) {
        document.getElementById("demo").innerHTML = "Bottom";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/bottom.jpg";
    }
    //bottom left
    else if (x < 12 && y > 240) {
        document.getElementById("demo").innerHTML = "Bottom Left";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/bottom-left.jpg";
    }
    //left
    else if (x < 12 && (y > 30 && y < 240)) {
        document.getElementById("demo").innerHTML = "Left";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/Left.jpg";
    }
    //on Image
    else if ((x > 12 && x < 162) && (y > 30 && y < 240)) {
        document.getElementById("demo").innerHTML = "On Image";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/on-mouseover.jpg";
    } else {
        document.getElementById("demo").innerHTML = "On Welcome";
        imgvar = document.getElementById("iSelfie");
        imgvar.src = "../Images/iSelfieImages/welcomePic.jpg";
    }
}