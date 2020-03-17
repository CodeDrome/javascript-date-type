window.onload = function()
{
    createDateMethods();

    setEventHandlers();
}

function setEventHandlers()
{
    document.getElementById("btnSetToNow").onclick = function(){setToNow();};
    document.getElementById("dateinput").onchange = function(){setFromDateInput();};
    document.getElementById("datetext").onchange = function(){parseFromText();};
}

function setToNow()
{
    const now = new Date();

    outputDate(now);
}

function setFromDateInput()
{
    const datevalue = document.getElementById("dateinput").value;

    const date = new Date(datevalue);

    outputDate(date);
}

function parseFromText()
{
    const datevalue = document.getElementById("datetext").value;

    const date = new Date(datevalue);

    outputDate(date);
}

function outputDate(date)
{
    if(isNaN(date.valueOf()))
    {
        alert("Invalid date");
    }

    clearConsole("console");

    writeToConsole(`${padWithNBSP("Raw object:", 20)}${date}<br/><br/>`, "console");
    writeToConsole(`${padWithNBSP("toLocaleString:", 20)}${date.toLocaleString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toString:", 20)}${date.toString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("valueOf:", 20)}${date.valueOf()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toDateString:", 20)}${date.toDateString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toTimeString:", 20)}${date.toTimeString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toLocaleDateString:", 20)}${date.toLocaleDateString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toLocaleTimeString:", 20)}${date.toLocaleTimeString()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("toUTCString:", 20)}${date.toUTCString()}<br/>`, "console");

    writeToConsole("<br/>", "console");

    writeToConsole(`${padWithNBSP("getFullYear:", 20)}${date.getFullYear()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getMonth:", 20)}${date.getMonth()} (0 = January)<br/>`, "console");
    writeToConsole(`${padWithNBSP("getDay:", 20)}${date.getDay()} (0 = Sunday)<br/>`, "console");
    writeToConsole(`${padWithNBSP("getDate:", 20)}${date.getDate()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getHours:", 20)}${date.getHours()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getMinutes:", 20)}${date.getMinutes()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getSeconds:", 20)}${date.getSeconds()}<br/>`, "console");

    writeToConsole("<br/>", "console");

    writeToConsole(`${padWithNBSP("getDayNameFull:", 20)}${date.getDayNameFull()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getDayNameShort:", 20)}${date.getDayNameShort()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getMonthNameFull:", 20)}${date.getMonthNameFull()}<br/>`, "console");
    writeToConsole(`${padWithNBSP("getMonthNameShort:", 20)}${date.getMonthNameShort()}<br/>`, "console");

    writeToConsole("<br/>", "console");
}

function createDateMethods()
{
    Date.prototype.getDayNameFull = function()
    {
        return this.toLocaleDateString(undefined, { weekday: 'long' });
    }

    Date.prototype.getDayNameShort = function()
    {
        return this.toLocaleDateString(undefined, { weekday: 'short' });
    }

    Date.prototype.getMonthNameFull = function()
    {
        return this.toLocaleDateString(undefined, { month: 'long' });
    }

    Date.prototype.getMonthNameShort = function()
    {
        return this.toLocaleDateString(undefined, { month: 'short' });
    }
}

function padWithNBSP(string, length)
{
    return string + "&nbsp;".repeat(length - string.length);
}
