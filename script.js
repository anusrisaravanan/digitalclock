function showTime(){
    let date = new Date();
    let hours  = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours)    
}
function convertFormat(time){
    let format = 'AM'
    if (time >= 12){
        format = 'PM'
    }
    return format;
}