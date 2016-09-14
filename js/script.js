/* Calculates a mathematical expression, like 5 * 4 - 3 
Returns the result */ 
function calculateExpression(expression) {
	var result = eval('(' + expression + ')');
	console.log(expression + " = " + result);
	return result;
}