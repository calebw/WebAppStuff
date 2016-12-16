using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            IceCreamServing[] orders = new IceCreamServing[4];

            orders[0] = ScooperFactory.OrderServing(IceCreamFlavours.Chocolate);
            orders[1] = ScooperFactory.OrderServing(IceCreamFlavours.Pumpkin, IceCreamFlavours.Coffee);
            orders[2] = ScooperFactory.OrderServing(IceCreamFlavours.Strawberry, IceCreamFlavours.Dark_Chocolate, IceCreamFlavours.Cookie_Dough);
            orders[3] = ScooperFactory.OrderServing(IceCreamFlavours.Vanilla, IceCreamFlavours.Cake_Batter);

            foreach (IceCreamServing o in orders) {
                Console.WriteLine(o.ToString());
            }

            Console.Read();
        }
    }
}
