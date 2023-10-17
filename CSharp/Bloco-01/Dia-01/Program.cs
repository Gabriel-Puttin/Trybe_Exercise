Console.WriteLine("Boas vindas ao programa 'Calcula Lâmpada'!");
Console.WriteLine("Informe o nome do cômodo: ");
string convenient = Console.ReadLine()!;

Console.WriteLine("Informe em metros a largura deste cômodo: ");
decimal width = decimal.Parse(Console.ReadLine()!);

Console.WriteLine("Informe em metros o comprimento deste cômodo: ");
decimal length = decimal.Parse(Console.ReadLine()!);

Console.WriteLine("Informe a potência em watts da lâmpada que será utilizada: ");
int power = int.Parse(Console.ReadLine()!);

decimal squareMeter = width * length;
decimal quotientX = power / 18M;
decimal totalLightBulbs = squareMeter / quotientX;

Console.WriteLine("Para iluminar o cômodo: " + convenient + " com " + squareMeter.ToString("N2") + " metros quadrados " + "será necessário a instalação de " + totalLightBulbs.ToString("N2") + " lâmpada(s)");


//Adição
int a = 50, b = 50;
int result1 = a + b;
Console.WriteLine(a + " + " + b + " = " + result1);

//Subtração
int c = 77, d = 21;
int result2 = c - d;
Console.WriteLine(c + " - " + d + " = " + result2);

//Multiplicação
int e = 5, f = 5;
int result3 = e * f;
Console.WriteLine(e + " * " + f + " = " + result3);

//divisão
int g = 90, h = 9;
int result4 = g / h;
Console.WriteLine(g + " / " + h + " = " + result4);

//módulo
int i = 36, j = 7;
int result5 = i % j;
Console.WriteLine("O resto da divisão de "+i+" por "+j+" é "+result5);


//ordem de execução
int k = 5, l = 10, m = 15;
int result6 = (k + l * m);
Console.WriteLine("("+a+" + "+b+" * "+c+") = "+result1);

//utilizando parênteses
int result7 = ((k + l) * m);
Console.WriteLine("((" + a + " + " + b + ") * " + c + ") = " + result2);