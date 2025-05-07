let periodLength = 52 * 60
let periodInterval = 3
let startOfDay = 8 * 3600;
let endOfDay = 16 * 3600;
let dayEnded = false



const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const normalSchedule = {0: 8*3600, 1: ((8*3600)+(48*60)), 2: ((9*3600)+(45*60)), 3: ((10*3600)+(37*60)), 4:((11*3600)+(29*60)), 5: ((12*3600)+(21*60)), 6: ((13*3600)+(13*60)), 7: ((14*3600)+(5*60)), 8: ((14*3600)+(57*60)), 9: ((15*3600)+(49*60))}
const earlyWednesday = {0: 8*3600, 1:((8*3600)+(35*60)), 2: ((9*3600)+(14*60)), 3: ((9*3600)+(53*60)), 4: ((10*3600)+(32*60)), 5: ((11*3600)+(11*60)), 6:((11*3600)+(50*60)), 7: ((12*3600)+(29*60)), 8:((13*3600)+(8*60)), 9: ((13*3600)+(47*60))}
const threepmSchedule = {0: 8*3600, 1: ((8*3600)+ (42*60)), 2: ((9*3600)+(28*60)), 3: ((10*3600)+(14*60)), 4: ((11*3600)), 5: ((11*3600)+(46*60)), 6: ((12*3600)+(32*60)), 7: ((13*3600)+(18*60)), 8: ((14*3600)+(4*60)), 9: ((14*3600)+(50*60))}
const mockTest = {0: 8*3600, 1: ((8*3600)+(40*60)), 2: ((9*3600)+(20*60)), 3: ((10*3600)), 4: ((13*3600)+(45*60))}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let scheduleUsed = normalSchedule
let bigClock = false
const ewBtn = document.getElementById("ew")

function enabledSchedule(sched){
    scheduleUsed = sched
    console.log(sched)
    if (sched == earlyWednesday){
        endOfDay = 14 * 3600
    } else if (sched == normalSchedule || sched == mockTest){
        endOfDay = 16*3600
    } else if (sched == threepmSchedule){
        endOfDay = 15*3600
    }
}

function getNextScheduledPeriod(schedule) {
    // Get current time in seconds since midnight
    const now = new Date();
    const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let nextPeriod = null;
    let nextTime = Infinity;
    console.log(currentTimeInSeconds)
  
    // Iterate through the schedule
    for (const [period, timeInSeconds] of Object.entries(schedule)) {
      if (timeInSeconds > currentTimeInSeconds && timeInSeconds < nextTime) {
        nextPeriod = period;
        nextTime = timeInSeconds;
      }
    }

    console.log(nextTime)
  
    // If no next period found, return null
    if (nextPeriod === null) {
      return null;
    }
  
    // Convert nextTime to hours and minutes
    let hours = Math.floor(nextTime / 3600);
    const minutes = Math.floor((nextTime % 3600) / 60);
    if (hours > 12){
        hours -= 12
    }
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
  
    // Return an object with the next period and its time
    return {
      period: nextPeriod,
      formatTime: formattedTime,
      time: nextTime
    };
  }

  function bigTime(){
    if (!bigClock){
        let timeelapsedLabel = document.getElementById("timeElapsed")
        let timeLabel = document.getElementById("time")
        let title = document.getElementById("title")
        let credits = document.getElementById("credits")
        let bathroom = document.getElementById("tenminutes")
        const periodEndLabel = document.getElementById("periodEnd")
        const dayEndLabel = document.getElementById("dayEnd")
        const bigClockLabel = document.getElementById("bigClockLabel")
        bigClock = true

        bigClockLabel.style.display = "flex"
        timeelapsedLabel.style.display = "none"
        timeLabel.style.display = "none"
        bathroom.style.display = "none"
        periodEndLabel.style.display = "none"
        dayEndLabel.style.display = "none"
        title.style.display = "none"
        credits.style.display = "none"
    } else {
        let timeelapsedLabel = document.getElementById("timeElapsed")
        let timeLabel = document.getElementById("time")
        let title = document.getElementById("title")
        let credits = document.getElementById("credits")
        let bathroom = document.getElementById("tenminutes")
        const periodEndLabel = document.getElementById("periodEnd")
        const dayEndLabel = document.getElementById("dayEnd")
        const bigClockLabel = document.getElementById("bigClockLabel")
        bigClock = false

        bigClockLabel.style.display = "none"
        timeelapsedLabel.style.display = "flex"
        timeLabel.style.display = "block"
        bathroom.style.display = "flex"
        periodEndLabel.style.display = "flex"
        dayEndLabel.style.display = "flex"
        title.style.display = "flex"
        credits.style.display = "block"
    }
  }

setInterval(() => {
    let timeelapsedLabel = document.getElementById("timeElapsed")
    let timeLabel = document.getElementById("time")
    let bathroom = document.getElementById("tenminutes")
    const periodEndLabel = document.getElementById("periodEnd")
    const dayEndLabel = document.getElementById("dayEnd")
    const bigClockLabel = document.getElementById("bigClockLabel")

    let time = new Date();
    let timeMinutes = time.getMinutes();
    let timeHours = time.getHours();
    let timeSeconds = time.getSeconds();
    let timeReal = (timeHours * 3600) + (timeMinutes * 60) + timeSeconds ;
    let afternoon = false

    if (timeHours > 12){
        timeHours -= 12
        afternoon = true
    }

    

    if (dayEnded){
        timeelapsedLabel.innerHTML = "The school day has ended."
        timeLabel.innerHTML = ""
        bathroom.innerHTML = ""
        periodEndLabel.innerHTML = ""
        if (weekDays[time.getDay()] == "Friday"){
            dayEndLabel.innerHTML = "It's the weekend relax!"
        } else {
            dayEndLabel.innerHTML = "Get ready for the next day tomorrow at 8 a.m!"
        }
        
        return
    }

    if (timeReal > endOfDay){
        dayEnded = true
        return
    }
    if (afternoon) {
            timeLabel.innerHTML = `The time is ${timeHours}:${String(timeMinutes).padStart(2, '0')} pm. <br>Today is ${weekDays[time.getDay()]} ${month[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
            bigClockLabel.innerHTML = `${timeHours}:${String(timeMinutes).padStart(2, '0')} <span>:${String(timeSeconds).padStart(2, "0")}</span>&nbsp; pm`
        } else {
            timeLabel.innerHTML = `The time is ${timeHours}:${String(timeMinutes).padStart(2, '0')} am.<br> Today is ${weekDays[time.getDay()]} ${month[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}.`
            bigClockLabel.innerHTML = `${timeHours}:${String(timeMinutes).padStart(2, '0')} <span>:${String(timeSeconds).padStart(2, "0")}</span>&nbsp; am`
        }
    let periodList
    periodList = getNextScheduledPeriod(scheduleUsed)
    console.log(periodList)
    let timeEnd = periodList["time"]
    

    console.log(timeEnd)

    let currentPeriod = periodList["period"]
    let timeLeft = timeEnd - timeReal
    let timeLeftHr = Math.floor(timeLeft/3600)%24
    let timeLeftMin = Math.floor(timeLeft/60)%60
    let timeLeftSec = timeLeft%60
    console.log(timeLeft)

    if (timeLeft < 2280 && timeLeft > 720){
        bathroom.innerHTML = "Bathrooms are open!"
        bathroom.style.color = "#a7c957"
    } else if (timeLeft > 2280) {
        bathroom.innerHTML = "Bathrooms are closed due to it still being the first ten minutes."
        bathroom.style.color = "#d90429"
    } else if (timeLeft > 600 && timeLeft < 720){
        bathroom.innerHTML = "Bathrooms are closing in less than 2 minutes."
        bathroom.style.color = "#dc2f02"
    } else if (timeLeft < 600) {
        bathroom.innerHTML = "Bathrooms are closed due to it being the last ten minutes."
        bathroom.style.color = "#d90429"
    }

    let timeLeftString = ''

    if (timeLeftHr > 0) {
        timeLeftString += `${timeLeftHr} hours `;
    }
    if (timeLeftMin > 0 || timeLeftHr > 0) {
        timeLeftString += `${timeLeftMin} minutes `;
    }
    if (timeLeftSec > 0) {
        timeLeftString += `${timeLeftSec} seconds`;
    }

    let periodString
    console.log(scheduleUsed)
    switch  (parseInt(currentPeriod)){
        case 1:
            periodString = `1st period`;
            break;
        case 2:
            periodString = `2nd period`;
            break;
        case 3:
            periodString = `3rd period`;
            break;
        case 4:
            
            if (scheduleUsed == mockTest){
                periodString = `Testing`
            } else {
                periodString = "4th period"
            }

            break

        default:
            periodString = `${currentPeriod}th period`;
    }

    
    
    periodEndLabel.innerHTML = `${periodString} ends at ${periodList["formatTime"]}.`
    if (currentPeriod == 0){
            `School starts at ${periodList["formatTime"]}`
    }
    
    let dayLeft = endOfDay - timeReal
    let dayLeftHour = Math.floor(dayLeft/3600)%24
    let dayLeftMin = Math.floor(dayLeft/60)%60
    let dayleftSec = dayLeft%60
    
    let dayLeftString = ""
    if (dayLeftHour > 0){
        dayLeftString += `${dayLeftHour} hours, `
    }
    if (dayLeftMin > 0) {
        dayLeftString += `${dayLeftMin} minutes,`
    }
    if (dayleftSec > 0) {
        dayLeftString += ` and ${dayleftSec} seconds`
    }

    dayLeftString += " left in the day."

    dayEndLabel.innerHTML = dayLeftString

    timeelapsedLabel.innerHTML = `There is ${timeLeftString} in ${periodString}.`

    

    
}, 1000);
