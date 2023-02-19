document.getElementById("idName").addEventListener("blur", checkName);
document.getElementById("idPwd").addEventListener("blur", checkPwd);
document.getElementById("idDate").addEventListener("blur", checkDate);
function checkName() {
    let theNameObj = document.getElementById("idName");
    console.log(theNameObj);
    let theNameObjVal = theNameObj.value;
    console.log(theNameObjVal);
    console.log(typeof theNameObjVal);
    let sp = document.getElementById("idNamesp");
    let theNameObjValLen = theNameObjVal.length;
    let re = /[\u4e00-\u9fff]/
    if (theNameObjVal == "") {
        sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不可為空白</span>";
    } else if (theNameObjValLen < 2) {
        sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>請輸入兩個字以上</span>";
    } else {
        for (let i = 0; i < theNameObjValLen; i++) {
            if (re.test(theNameObjVal.charAt(i))) {
                sp.innerHTML = "<img src='Images/correct.png' class='icon' >正確";
            } else {
                sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不可包含非中文字元</span>";
                break;
            }
        }
    }
}
function checkPwd() {
    let thePwdObj = document.getElementById("idPwd");
    console.log(thePwdObj);
    let thePwdObjVal = thePwdObj.value;
    console.log(thePwdObjVal);
    console.log(typeof thePwdObjVal);
    let sp = document.getElementById("idPwdsp");
    let thePwdObjValLen = thePwdObjVal.length;
    let checkEng = false, checkNum = false, checkSign = false, check = false;
    if (thePwdObjVal == "") {
        sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不可為空白</span>";
    } else if (thePwdObjValLen < 6) {
        sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>請輸入6個字以上</span>";
    } else {
        for (let i = 0; i < thePwdObjValLen; i++) {
            let ch = thePwdObjVal.charAt(i);
            if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
                checkEng = true;
            } else if (ch >= "0" && ch <= "9") {
                checkNum = true;
            } else if (ch == "!" || ch == "@" || ch == "#" || ch == "$" || ch == "%" || ch == "^" || ch == "&" || ch == "*") {
                checkSign = true;
            } else {
                check = true;
            }
        }
        if (check) {
            sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位含有非法字元</span>";
        } else if (!checkEng) {
            sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不包含英文</span>";
        } else if (!checkNum) {
            sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不包含數字</span>";
        } else if (!checkSign) {
            sp.innerHTML = "<img src='Images/error.png' class='icon'><span style='color:red'>該欄位不包含特殊符號</span>";
        } else {
            sp.innerHTML = "<img src='Images/correct.png' class='icon' >正確";
        }
    }

}
function checkDate() {
    let theDateObj = document.getElementById("idDate");  
    let theDateObjVal=theDateObj.value;
    console.log(theDateObj);
    console.log(theDateObjVal);
    console.log(typeof theDateObjVal);
    let sp = document.getElementById("idDatesp");
    // let reg=/^\d{4}+\/+\d{2}+\/+\d{2}$/;
    let reg=/^\d{4}\/{1}\d{2}\/{1}\d{2}$/;
    let yearCheck=false,monthCheck=false,dayCheck=false;
    if(!reg.test(theDateObjVal)){
        sp.innerHTML= "<img src='Images/error.png' class='icon'><span style='color:red'>格式錯誤</span>";
    }else{
        d=new Date(theDateObjVal);
        console.log(`d=${d}`);
        console.log(`theDateObjVal=${theDateObjVal}`)
        if(!(d.getFullYear()==theDateObjVal.substr(0,4))){
            sp.innerHTML= "<img src='Images/error.png' class='icon'><span style='color:red'>日期錯誤</span>";
        }else if(!(d.getMonth()+1==theDateObjVal.substr(5,2))){
            sp.innerHTML= "<img src='Images/error.png' class='icon'><span style='color:red'>日期錯誤</span>";
        }else if(!(d.getDate()==theDateObjVal.substr(8,2))){
            sp.innerHTML= "<img src='Images/error.png' class='icon'><span style='color:red'>日期錯誤</span>";
        }else{
            sp.innerHTML= "<img src='Images/correct.png' class='icon'>正確";
        }

    }
    
}