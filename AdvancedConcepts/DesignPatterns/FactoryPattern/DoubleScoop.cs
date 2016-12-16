using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    class DoubleScoop : IceCreamServing
    {
        private readonly IceCreamFlavours[] _scoops;

        public DoubleScoop(IceCreamFlavours f1, IceCreamFlavours f2) {
            this._scoops = new IceCreamFlavours[2];
            Create(f1, f2);
        }

        protected override IceCreamFlavours[] Scoops
        {
            get
            {
                return this._scoops;
            }
        }

        public override void Create(params IceCreamFlavours[] f)
        {
            Scoops[0] = f[0];
            Scoops[1] = f[1];
        }

        public override string ToString()
        {
            return "Double of "+Scoops[0] + " and " + Scoops[1];
        }
    }
}
