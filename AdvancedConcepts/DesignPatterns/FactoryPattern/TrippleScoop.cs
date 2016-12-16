using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    class TrippleScoop : IceCreamServing
    {
        private readonly IceCreamFlavours[] _scoops;

        public TrippleScoop(IceCreamFlavours f1, IceCreamFlavours f2, IceCreamFlavours f3){
            this._scoops = new IceCreamFlavours[3];
            Create(f1,f2,f3);
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
            Scoops[2] = f[2];
        }

        public override string ToString()
        {
            return "Tripple of " + Scoops[0] + ", " + Scoops[1] + " and " + Scoops[2];
        }
    }
}
