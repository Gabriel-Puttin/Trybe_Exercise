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
            FindString("c#");
            HanddleJoin();
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
            int i = loveTrybe.IndexOf("e", 6);
            Console.WriteLine(i);
        }

        public static void FindString(string languageSearch)
        {
            List<string> languages = new List<string>
                { "c#", "java", "javascript", "python" };
            bool languageExists = languages.Contains(languageSearch);

            if (languageExists)
                Console.WriteLine("Essa linguagem existe no sistema");
            else
                Console.WriteLine("Essa linguagem não existe no sistema");
        }

        public static void HanddleJoin() {
            IEnumerable<int> listNumbers = Enumerable.Range(1, 10);
            string numbersText = string.Join(',', listNumbers);
            Console.WriteLine(numbersText);
        }
    }
}