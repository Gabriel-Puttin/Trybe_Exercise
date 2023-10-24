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
            InterpolationString();
            HandleDate();
            FuncsDateTime();
            AnonymousType();
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

        public static void HanddleJoin()
        {
            IEnumerable<int> listNumbers = Enumerable.Range(1, 10);
            string numbersText = string.Join(',', listNumbers);
            Console.WriteLine(numbersText);
        }

        public static void InterpolationString()
        {
            string name = "Gabriel";
            string greetings = $"Olá, {name}! Boas vindas ao sistema parceiro da Trybe!";
            Console.WriteLine(greetings);
        }

        public static void HandleDate()
        {
            var date = new DateTime(2022, 10, 2, 8, 35, 0);
            var dataType = DateTime.Now;
            var timeNow = $"O momento do tempo atual é {DateTime.Now}";
            var dateOnly = date.Date;
            var dayOnly = date.Day;
            var monthOnly = date.Month;
            var yearOnly = date.Year;
            Console.WriteLine($"{date.ToString()}, {dataType.GetType()}, {timeNow}, {dateOnly.ToString()}, {dayOnly.ToString()}, {monthOnly.ToString()}, {yearOnly.ToString()}");
        }

        public static void FuncsDateTime()
        {
            var today = DateTime.Now;
            var duration = new TimeSpan(36, 0, 0, 0);
            var answer = today.Add(duration);
            System.Console.WriteLine("Hoje é " + today.Day + "/" + today.Month + " - " + today.DayOfWeek);
            System.Console.WriteLine("Daqui a 36 dias será " + answer.Day + "/" + answer.Month + " - " + answer.DayOfWeek);

            var answer2 = today.AddDays(36);
            System.Console.WriteLine("Daqui a 36 dias será " + answer.Day + "/" + answer.Month + " - " + answer.DayOfWeek);

            DateTime date1 = new DateTime(2010, 9, 1, 5, 0, 0);
            DateTime date2 = new DateTime(2022, 8, 10, 12, 0, 0);

            int result = DateTime.Compare(date1, date2);
            string relationship;

            if (result < 0) relationship = "é anterior à";
            else if (result == 0) relationship = "è o mesmo que";
            else relationship = "è posterior à";

            Console.WriteLine("{0} {1} {2}", date1, relationship, date2);
        }

        public static void AnonymousType()
        {
            var myAnonymousType = new { Amount = 42, Message = "Olá", Value = 3.95 };

            Console.WriteLine(myAnonymousType.Amount);
            Console.WriteLine(myAnonymousType.Message);
            Console.WriteLine(myAnonymousType.Value);
        }
    }
}
