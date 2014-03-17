var tiny = function (userVal) {
	if (userVal >= 0 && userVal <= 1) {
		return true;
	} else {
		return false; 	
	};
};
console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));