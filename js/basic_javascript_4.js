// object dictionary with KVPs
function cat_Dictionary() {
    var Cat = {
        Name: "Sasha",
        Color: "Calico",
        Snack: "Chicken",
        Age: 5,
        Sound: "Meow!"
    };
    delete Cat.Sound;
    document.getElementById("Dictionary") .innerHTML = Cat.Sound;    
}