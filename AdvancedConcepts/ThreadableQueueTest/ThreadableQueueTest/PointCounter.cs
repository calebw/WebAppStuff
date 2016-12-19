using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ThreadableQueueTest
{
    public class PointCounter
    {
        private string filename;
        private AlphaCounter alphaCnter;
        private string pattern;

        public PointCounter(string file) {
            filename = file;
            alphaCnter = new AlphaCounter();
            pattern = @"\sLor|\sip|\sve|\sle|\ssag";
        }

        public AlphaCounter AlphCounter
        {
            get
            {
                return alphaCnter;
            }
        }

        public void Execute() {
            Regex reg = new Regex(pattern, RegexOptions.IgnoreCase);
            foreach (string line in File.ReadLines(filename))
            {
                Match m = reg.Match(line);
                while (m.Success)
                {
                    alphaCnter.AddMatch(m.Value);
                    m = m.NextMatch();
                }
            }
        }
    }
}
