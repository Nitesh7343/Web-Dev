let day = prompt("Enter the day number (1-7):");
switch(day) {
    case "1" :
        console.log("Sunday");
        alert("It's Sunday, time to relax!");
        break;
    case "2" :
        console.log("Monday");
        alert("It's Monday, back to work!");
        break;

    case "3" :
        console.log("Tuesday");
        alert("It's Tuesday, keep going!");
        break;
    case "4" :
        console.log("Wednesday");
        alert("It's Wednesday, half way there!");
        break;
    case "5" :
        console.log("Thursday");
        alert("It's Thursday, almost the weekend!");
        break;
    case "6" :
        console.log("Friday");
        alert("It's Friday, the weekend is near!");
        break;
    case "7" :
        console.log("Saturday");
        alert("It's Saturday, enjoy your day!");
        break;
    default :
        console.log("Invalid Day");
}
