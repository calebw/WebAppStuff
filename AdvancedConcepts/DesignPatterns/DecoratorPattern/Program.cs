using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Build Simple:\n");
            //Create building
            SimpleBuilding b = new SimpleBuilding();
            b.Build(8);
            Console.WriteLine("\nBuild With Ground:\n");

            //Decorate building
            GroundWithBuilding gb = new GroundWithBuilding(b);
            gb.Build(7);

            Console.Read();
        }
    }
}
