using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadableQueueTest
{
    public class AlphaCounter
    {
        public int cnt_Lor;
        public int cnt_ip;
        public int cnt_ve;
        public int cnt_le;
        public int cnt_sag;
        public int cnt_NONE;

        public void AddMatch(string match)
        {
            switch (match.ToLower())
            {
                case " lor":
                    cnt_Lor += (int)strPoint.Lor;
                    break;
                case " ip":
                    cnt_ip += (int)strPoint.ip;
                    break;
                case " ve":
                    cnt_ve += (int)strPoint.ve;
                    break;
                case " le":
                    cnt_le += (int)strPoint.le;
                    break;
                case " sag":
                    cnt_sag += (int)strPoint.sag;
                    break;
                default:
                    cnt_NONE += 1;
                    Console.WriteLine("NONE: " + match);
                    break;
            }
        }
    }

    public enum strPoint
    {
        Lor = 3,
        ip = 3,
        ve = 2,
        le = 2,
        sag = 4
    }
}
