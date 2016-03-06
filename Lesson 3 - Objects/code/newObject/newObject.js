(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constr, arg1, arg2) {
       return  constr = function(arg1, arg2){
            this.arg1 = arg1;
            this.arg2 = arg2;
        }
    }

	global.UAM.newObject = newObject;
   
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie 
    do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora.
    Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


