using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryPattern
{
    class SingleScoop : IceCreamServing
    {
        private readonly IceCreamFlavours[] _scoops;

        public SingleScoop(IceCreamFlavours f1) {
            this._scoops = new IceCreamFlavours[1];
            Create(f1);
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
        }

        public override string ToString()
        {
            return "Single of " + Scoops[0];
        }
    }
}
