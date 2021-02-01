/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr){
    const employee = {}
    employee.firstName = arr[0]
    employee.familyName = arr[1]
    employee.title = arr[2]
    employee.payPerHour = arr[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}

function createEmployeeRecords(src) {
    const employees = []
    src.map(e => employees.push(createEmployeeRecord(e)))
    return employees
}

function createTimeInEvent(date) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.slice(-4)),
        date: date.split(" ")[0],
    })
    return this
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.slice(-4)),
        date: date.split(" ")[0],
    })
    return this
}

function hoursWorkedOnDate(date) {
    const clockIn = this.timeInEvents.find(e => e.date === date).hour
    const clockOut = this.timeOutEvents.find(e => e.date === date).hour
    return (parseInt(clockOut) - parseInt(clockIn)) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(src) {
    return src.reduce(
        (total, emp) => total + allWagesFor.call(emp), 0
    )
}

function findEmployeeByFirstName(src, firstName) {
    return src.find(employee => employee.firstName === firstName)
}