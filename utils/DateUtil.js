export default class DateUtil {

static getCurrentDate() {

return new Date();
//Date , Month , year,Time  - return getCurrentDate() method 

// new Date()= Create Date Object containing the Current Date and Time

// static - You don't need to create a new DateUtil object to use this method
}

static getCurrentYear(){
return new Date().getFullYear();
}

static getCurrentMonth(){
return new Date().getMonth() + 1; 

//JavaScript counts months starting from 0:
}

static getCurrentDay(){
return new Date().getDate();
}

};