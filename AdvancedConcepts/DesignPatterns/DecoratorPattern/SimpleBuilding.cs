using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorPattern
{
    public class SimpleBuilding : Building
    {
        public override void Build(int height) {
            if (height < 2) { return; }
            Console.WriteLine("///////////");
            Console.WriteLine("/////------");
            for (int i=0; i<height; i++) {
                Console.WriteLine("/////|====|");
            }
            Console.WriteLine("/////------");
        }
    }
}
