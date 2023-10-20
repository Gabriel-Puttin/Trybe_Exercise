using System;

namespace Program
{
    class Program
    {
        static void Main()
        {
            ConcatString();
        }

        public static void ConcatString()
        {
            string textOne = "Você está aprendendo sobre ";
            string textTwo = "Strings em C#, ";
            string textThree = "e agora sabe concatenar textos utilizando a função Concat()!";

            string concatResult = string.Concat(textOne, textTwo, textThree);
            Console.WriteLine(concatResult);
        }

        public static void SplitString()
        {
            string emails = "email1@trybe.com;email2@trybe.com;email3@trybe.com";
            string[] arrayEmails = emails.Split(";");
            Console.WriteLine(arrayEmails);
        }
    }
}