/*
 * https://3g-aerial.biz/onlajn-raschety/raschety-antenn/raschet-antenny-quados
 * */
function ChangeImage()
{
	var n = document.generator2.q_element_number.value * 1;
	if (n == 4)
	{
		document.getElementById("schema").src = "../../images/pictures/antena_quados4.gif"
	}
	else if (n == 6)
	{
		document.getElementById("schema").src = "../../images/pictures/antena_quados6.gif"
	}
	else if (n == 8)
	{
		document.getElementById("schema").src = "../../images/pictures/antena_quados8.gif"
	}
}

function calc()
{
	f = document.generator2.freq.value * 1;
	var lambda = 299792 / f;
	var q = document.generator2.q_element_number.value * 1;
	if (q == 4)
	{
		var A = 0.1814257885467257 * lambda;
		var B = 0.3219899130063511 * lambda;
		var C = 0.2942039814271228 * lambda;
		var D = 0.3228071462880931 * lambda;
		var E = 0.0776371617654907 * lambda;
		var dw = 0.0163446656348402 * lambda;
		var H = 0.1421985910231094 * lambda;
		var I = 2.942039814271228 * lambda;
		var R = 0.5965802956716657 * lambda;
		var l = 4 * (A + B + D + 3 * C);
		result = "";
		result = result + "Javascript Version 15.08.2015" + '\n';
		result = result + "Антенна QUADOS-4" + '\n';
		result = result + "Длина волны λ:  " + Math.round(lambda * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Расстояние A: " + Math.round(A * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние B: " + Math.round(B * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки C: " + Math.round(C * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки D: " + Math.round(D * 10) / 10 + "  мм" + '\n';
		result = result + "Ширина линии E: " + Math.round(E * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние до рефлектора H: " + Math.round(H * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Общая длина провода: " + Math.round(l * 10) / 10 + "  мм" + '\n';
		result = result + "Приблизительный диаметр провода: " + Math.round(dw * 10) / 10 + "  мм" + '\n';
		result = result + "Размеры рефлектора: " + Math.round(I) + "x" + Math.round(R) + "  мм" + '\n';
	}
	if (q == 6)
	{
		var A = 0.1740706890110477 * lambda;
		var B = 0.3505930778673213 * lambda;
		var C = 0.3383345786411912 * lambda;
		var D = 0.2974729145540908 * lambda;
		var E = 0.3277105459785451 * lambda;
		var F = 0.0817233281742008 * lambda;
		var dw = 0.0163446656348402 * lambda;
		var H = 0.1184988258525911 * lambda;
		var I = 4.413059721406842 * lambda;
		var R = 0.5965802956716657 * lambda;
		var l = 4 * (A + B + C + E + 5 * D);
		result = "";
		result = result + "Javascript Version 15.08.2015" + '\n';
		result = result + "Антенна QUADOS-6" + '\n';
		result = result + "Длина волны λ:  " + Math.round(lambda * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Расстояние A: " + Math.round(A * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние B: " + Math.round(B * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние C: " + Math.round(C * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки D: " + Math.round(D * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки E: " + Math.round(E * 10) / 10 + "  мм" + '\n';
		result = result + "Ширина линии F: " + Math.round(F * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние до рефлектора H: " + Math.round(H * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Общая длина провода: " + Math.round(l * 10) / 10 + "  мм" + '\n';
		result = result + "Приблизительный диаметр провода: " + Math.round(dw * 10) / 10 + "  мм" + '\n';
		result = result + "Размеры рефлектора: " + Math.round(I) + "x" + Math.round(R) + "  мм" + '\n';
	}
	if (q == 8)
	{
		var A = 0.1609949565031755 * lambda;
		var B = 0.3285277792602871 * lambda;
		var C = 0.3375173453594492 * lambda;
		var D = 0.3620343438117095 * lambda;
		var E = 0.3064624806532529 * lambda;
		var F = 0.3399690452046752 * lambda;
		var G = 0.0931645941185889 * lambda;
		var dw = 0.0163446656348402 * lambda;
		var H = 0.1119609595986551 * lambda;
		var I = 5.884079628542456 * lambda;
		var R = 0.5965802956716657 * lambda;
		var l = 4 * (A + B + C + D + F + 7 * E);
		result = "";
		result = result + "Javascript Version 15.08.2015" + '\n';
		result = result + "Антенна QUADOS-8" + '\n';
		result = result + "Длина волны λ:  " + Math.round(lambda * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Расстояние A: " + Math.round(A * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние B: " + Math.round(B * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние C: " + Math.round(C * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние D: " + Math.round(D * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки E: " + Math.round(E * 10) / 10 + "  мм" + '\n';
		result = result + "Сторона рамки F: " + Math.round(F * 10) / 10 + "  мм" + '\n';
		result = result + "Ширина линии G: " + Math.round(G * 10) / 10 + "  мм" + '\n';
		result = result + "Расстояние до рефлектора H: " + Math.round(H * 10) / 10 + "  мм" + '\n';
		result = result + "-------------------------------------------------------------" + '\n';
		result = result + "Общая длина провода: " + Math.round(l * 10) / 10 + "  мм" + '\n';
		result = result + "Приблизительный диаметр провода: " + Math.round(dw * 10) / 10 + "  мм" + '\n';
		result = result + "Размеры рефлектора: " + Math.round(I) + "x" + Math.round(R) + "  мм" + '\n';
	}
	document.generator2.result.value = result;
}
