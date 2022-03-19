function travel(x = "mars"){
        console.log(`I wanna travel to ${x}`);
}
    let planet = prompt("Enter a planet: ");
    travel(planet);
    travel();

(function tarvel(x = "mars"){
    console.log(`I wanna travel to ${x}`);
})(planet);

(function tarvel(x = "mars"){
    console.log(`I wanna travel to ${x}`);
})();