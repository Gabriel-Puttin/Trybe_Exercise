using System;

namespace Program
{
    class Program
    {
        static void Main()
        {
            ConcatString();
            SplitString();
            FindLetter();
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
            foreach (string item in arrayEmails)
            {
                Console.WriteLine(item);
            }
        }

        public static void FindLetter()
        {
            string trybe = "Trybe";
            int index = trybe.IndexOf("y");
            Console.WriteLine(index);
            int indexNone = trybe.IndexOf("s");
            Console.WriteLine(indexNone);
            string loveTrybe = "I love Trybe";
            int i = loveTrybe.IndexOf("e", 13);
            Console.WriteLine(i);
        }
    }
}