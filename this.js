const myObj = {
    name: 'Rahim',
    getFullName: function () {
        console.log(this);
        return 'Mr. ' + this.name;
    }
}

const anotherObj = {
    name: 'Karim'
}
anotherObj.getFullName = myObj.getFullName;
myObj.getFullName();
anotherObj.getFullName();

//kono ekta method/function ke call korle sei method er bam pashe je thakbe seta hobe tar this er value.

function add(a, b) {
    console.log(this);
    return a + b;
}
add();
//bam pashe kew nai, so, this er value hobe window

anotherObj.sum = add;
anotherObj.sum();

//kono ekta dom element er moddhe event handler thkle jeitar moddhe handler ta hocche seitai hobe this