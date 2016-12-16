using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    //Creator/Factory
    //This is generally an abstract class
    public static class ScooperFactory
    {
        public static IceCreamServing OrderServing(IceCreamFlavours type1) {
            return new SingleScoop(type1);
        }
        public static IceCreamServing OrderServing(IceCreamFlavours type1, IceCreamFlavours type2)
        {
            return new DoubleScoop(type1, type2);
        }
        public static IceCreamServing OrderServing(IceCreamFlavours type1, IceCreamFlavours type2, IceCreamFlavours type3)
        {
            return new TrippleScoop(type1, type2, type3);
        }
    }
}
