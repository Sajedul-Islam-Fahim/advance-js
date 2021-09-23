function callbacks(name,age,task){
    console.log(name);
    console.log(age);
    task();
}

function washHand(){
    console.log("Wash your hand");
}

function takeNap(){
    console.log("Take a nap bro");
}

callbacks("Mithun",25,takeNap);
callbacks("Tanvir",24,washHand);

//Callback - function er moddhe arek function k call kora