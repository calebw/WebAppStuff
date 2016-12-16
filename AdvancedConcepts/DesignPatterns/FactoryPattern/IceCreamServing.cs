using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    //Product
    public abstract class IceCreamServing
    {
        protected abstract IceCreamFlavours[] Scoops { get; }

        public abstract void Create(params IceCreamFlavours[] f);
        public abstract override string ToString();
    }

    public enum IceCreamFlavours {
        Vanilla, Chocolate, Strawberry, Coffee, Dark_Chocolate,
        Pumpkin, Cookie_Dough, Cake_Batter 
    };
}
