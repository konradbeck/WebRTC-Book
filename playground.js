var handler = {};

function doSomething(arg)
{
	console.log(arg);
}

handler["/"] = doSomething;

if (typeof handler["/"] == "function")
{
	console.log("This is a function, there I can call it");

	handler["/"]("Hopefully this gets printed");
}