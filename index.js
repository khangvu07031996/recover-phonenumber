module.exports = function(phone){
    let finnish_number ='';
if(phone.length === 10){
    return phone;
}else if(phone.length === 11) {

    let headNumber3 = phone.substr(0,3);
    let headNumber4 = phone.substr(0,4);
    //sub 3 head number
    let endNumber3 = phone.substr(3);
    //sub 4 head number
    let endNumber4 = phone.substr(4);

    //viettel
    if(headNumber3 === '016'){
         finnish_number = '03' + endNumber3;
    //mobi
    } else if(headNumber4 === '0120' ||headNumber4 === '0128' ||headNumber4 === '0126'){
        finnish_number = '07' + endNumber3;
    //vietnam -- gmobile
    } else if(headNumber3 === '018' || headNumber3 === '019'){
        finnish_number = '05' + endNumber3;
        //vinaphone
    } else if(headNumber4 === '0123' ||headNumber4 === '0124'||headNumber4 === '0125'){
        finnish_number = '08' + endNumber3;
        // special mobi
    } else if(headNumber4 === '0121'){
        finnish_number = '079' + endNumber4;
    } else if(headNumber4 === '0122'){
        finnish_number = '077' + endNumber4;
        //special vina
    }else if(headNumber4 === '0127'){
        finnish_number = '081' + endNumber4;
    }else if(headNumber4 === '0129'){
        finnish_number = '082' + endNumber4;
    }

}
return finnish_number;
}