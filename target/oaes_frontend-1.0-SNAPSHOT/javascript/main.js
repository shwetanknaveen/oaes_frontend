function viewAllExams(){
    let myParent = document.getElementById("examdetails");
    fetch("http://localhost:8091/getExams", {
        // Adding method type
        method: "get",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })// Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            console.log(json)
            let list = json;
            let array = [];
            for(let i=0;i<list.length;i++){
                let dt = new Date(list[i].examDate);
                array.push(list[i].examId+"  "+list[i].examCode  + "  " + list[i].examName + "  " + dt.getDate()+"/"+dt.getMonth() +"/"+dt.getFullYear()+  "  " + list[i].startTime + "  " + list[i].endTime);
            }
            let selectList = document.createElement("select");
            selectList.id = "prerequisites";
            selectList.multiple = true;
            selectList.type = "radio";
            myParent.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
        });
}

function viewExamByCodeSave(){
    let code = document.getElementById("code").value;
    let object = {};
    object.code = code;
    let jsonString = JSON.stringify(object);
    document.cookie = jsonString;
}

function viewExamByDateSave(){
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let object = {};
    object.start = start;
    object.end = end;
    let jsonString = JSON.stringify(object);
    document.cookie = jsonString;
}

function viewExamByCode(){
    let myParent = document.getElementById("examdetails");
    let temp = JSON.parse(document.cookie);
    let code = temp.code;
    let obj = {
        examCode: code
    };
    // Send to Backend
    fetch("http://localhost:8091/getExams/"+code, {
        // Adding method type
        method: "GET",
        // Adding body or contents to send
        // body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            console.log(json)
            let list = json;
            let array = [];
            for(let i=0;i<list.length;i++){
                let dt = new Date(list[i].examDate);
                array.push(list[i].examId+"  "+list[i].examCode  + "  " + list[i].examName + "  " + dt.getDate()+"/"+dt.getMonth() +"/"+dt.getFullYear()+  "  " + list[i].startTime + "  " + list[i].endTime);
            }
            let selectList = document.createElement("select");
            selectList.id = "prerequisites";
            selectList.multiple = true;
            selectList.type = "radio";
            myParent.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
        });
}

function viewExamByDate(){
    let myParent = document.getElementById("examdetails");
    let temp = JSON.parse(document.cookie);
    let start = temp.start;
    let end = temp.end;
    // let obj = {
    //     start_time: start,
    //     end_time : end
    // };
    // Send to Backend
    fetch("http://localhost:8091/getExamsBetween?startDate="+start+"&endDate="+end, {
        // Adding method type
        method: "GET",
        // Adding body or contents to send
        // body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            console.log(json)
            let list = json;
            let array = [];
            for(let i=0;i<list.length;i++){
                let dt = new Date(list[i].examDate);
                array.push(list[i].examId+"  "+list[i].examCode  + "  " + list[i].examName + "  " + dt.getDate()+"/"+dt.getMonth() +"/"+dt.getFullYear()+  "  " + list[i].startTime + "  " + list[i].endTime);
            }
            let selectList = document.createElement("select");
            selectList.id = "prerequisites";
            selectList.multiple = true;
            selectList.type = "radio";
            myParent.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
        });
}

function viewAllExamsAsc(){
    let myParent = document.getElementById("examdetails");
    fetch("http://localhost:8091/getExamsInAsc", {
        // Adding method type
        method: "get",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })// Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            console.log(json)
            let list = json;
            let array = [];
            for(let i=0;i<list.length;i++){
                let dt = new Date(list[i].examDate);
                array.push(list[i].examId+"  "+list[i].examCode  + "  " + list[i].examName + "  " + dt.getDate()+"/"+dt.getMonth() +"/"+dt.getFullYear()+  "  " + list[i].startTime + "  " + list[i].endTime);
            }
            let selectList = document.createElement("select");
            selectList.id = "prerequisites";
            selectList.multiple = true;
            selectList.type = "radio";
            myParent.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
        });
}

function viewAllExamsDesc(){
    let myParent = document.getElementById("examdetails");
    fetch("http://localhost:8091/getExamsInDesc", {
        // Adding method type
        method: "get",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })// Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {
            console.log(json)
            let list = json;
            let array = [];
            for(let i=0;i<list.length;i++){
                let dt = new Date(list[i].examDate);
                array.push(list[i].examId+"  "+list[i].examCode  + "  " + list[i].examName + "  " + dt.getDate()+"/"+dt.getMonth() +"/"+dt.getFullYear()+  "  " + list[i].startTime + "  " + list[i].endTime);
            }
            let selectList = document.createElement("select");
            selectList.id = "prerequisites";
            selectList.multiple = true;
            selectList.type = "radio";
            myParent.appendChild(selectList);
            for (let i = 0; i < array.length; i++) {
                let option = document.createElement("option");
                option.value = array[i];
                option.text = array[i];
                selectList.appendChild(option);
            }
        });
}

function addExam(){
    location.href = 'addExam.html';
    alert("Redirecting to Add Exam Page");
}

function viewExams(){
    location.href = 'viewAllExams.html';
    alert("Redirecting to All Exams Page");
}

function viewExamsAsc(){
    location.href = 'viewAllExamsAsc.html';
    alert("Redirecting to All Exams Page in Ascending Order by Date");
}

function viewExamsDesc(){
    location.href = 'viewAllExamsDesc.html';
    alert("Redirecting to All Exams Page in Descending Order by Date");
}

function viewExamsByCode(){
    location.href = 'viewExamByCode.html';
    alert("Redirecting to view exam by code");
}
function redirectToLogin(){
    location.href = 'login.html';
    alert("Redirecting to login page");
}



function viewExamsByDate(){
    location.href = 'viewExamByDate.html';
    alert("Redirecting to view exam by Date");
}

function editExam(){
    location.href = 'editExam.html';
    alert("Redirecting to Edit Exam Page");
}

function addExamToDatabase() {
    // // Getting values
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let description = document.getElementById("description").value;
    let obj = {
        examCode: code,
        examName: name,
        examDate: date,
        startTime: start,
        endTime: end,
        examDescription: description,
    };

    // Send to Backend
    fetch("http://localhost:8090/addExam", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    // Converting to JSON
        .then((response) => {
            if(response.status == 200){
                alert('Successfully Added the Exam !!')
                location.href = 'homepage.html';
                alert("Redirecting to Home Page");
            }
            else{
                alert(response.status);
            }
        })
    alert("Your request is in processing....")


}
function registerUser() {
    // // Getting values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let obj = {
        name: name,
        username: username,
        password: password,
        email: email,
    };
    // Send to Backend
    //fetch("http://localhost:8092/addUser", {
    fetch("http://localhost:8095/gateway/user/addUser", {    //test for eureka server
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => {
            if(response.status == 200){
                alert('Successfully Registered the User !!')
                location.href = 'login.html';
                alert("Redirecting to Login Page");
            }
            else{
                alert(response.status);
            }
        })
    alert("Your request is in processing....")
}
function loginUser() {
    // // Getting values
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // let obj = {
    //     email: email,
    //     password: password,
    // };
    // Send to Backend
    fetch("http://localhost:8092/getUser?email="+email+"&password="+password,{
        // Adding method type
        method: "GET",
        // Adding body or contents to send
        // body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => response.json())
            .then(json=>{
            if(json != null && json.email){
                alert('Successfully Logged in the User !!')
                location.href = 'homepage.html';
                alert('Redirecting to Homepage !!');
            }
            else{
                alert("Bad Credentials");
            }
        })
    alert("Your request is in processing....")
}

function editExamInDatabase() {
    let examid = document.getElementById("examid").value;
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let description = document.getElementById("description").value;
    let obj = {
        examId : examid,
        examCode: code,
        examName: name,
        examDate: date,
        startTime: start,
        endTime: end,
        examDescription: description,
    };

    // Send to Backend
    fetch("http://localhost:8090/updateExam", {
        // Adding method type
        method: "PUT",
        // Adding body or contents to send
        body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => {
            if (response.status == 200) {
                alert('Successfully Updated the Exam !!')
                location.href = 'homepage.html';
                alert("Redirecting to Home Page");
            } else {
                alert(response.status);
            }
        })
    alert("Your request is in processing....")
}
