using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadableQueueTest
{
    class Program
    {
        static Stopwatch timer;
        static AlphaCounter alph;

        static void MainThreaded(string file)
        {
            WorkQueue wQ = new WorkQueue();
            WorkItemProducer p1 = new WorkItemProducer(wQ, file);

            timer.Start();

            Task pT1 = Task.Run(() => p1.ProduceWorkItems());

            Task cT1 = Task.Run(() => wQ.MonitorWorkQueue());
            Task cT2 = Task.Run(() => wQ.MonitorWorkQueue());
            //Task cT3 = Task.Run(() => wQ.MonitorWorkQueue());
            //Task cT4 = Task.Run(() => wQ.MonitorWorkQueue());

            Task.WaitAll(pT1);
            wQ.AllItemsAdded();
            Task.WaitAll(cT1, cT2);

            timer.Stop();
            alph = wQ.AlphCounter;
        }

        static void MainNormal(string file)
        {
            PointCounter pntCnt = new PointCounter(file);
            timer.Start();
            pntCnt.Execute();
            timer.Stop();
            alph = pntCnt.AlphCounter;

        }

        static void Main(string[] args)
        {
            timer = new Stopwatch();

            bool cont = true;
            string file = "C:\\Users\\U460624\\Desktop\\New Text Document.txt";

            while (cont) {
                MainThreaded(file);
                //MainNormal(file);

                Console.WriteLine("Finished...");
                Console.WriteLine("Lor count: " + alph.cnt_Lor);
                Console.WriteLine("ip count: " + alph.cnt_ip);
                Console.WriteLine("le count: " + alph.cnt_le);
                Console.WriteLine("ve count: " + alph.cnt_ve);
                Console.WriteLine("sag count: " + alph.cnt_sag);
                Console.WriteLine("NONE count: " + alph.cnt_NONE);

                Console.WriteLine("Time: " + timer.ElapsedMilliseconds);
                Console.WriteLine(Environment.NewLine + Environment.NewLine);

                timer.Reset();
                string again = Console.ReadLine();
                if (again == "1")
                {
                    file = "C:\\Users\\U460624\\Desktop\\New Text Document.txt";
                }
                else if (again == "2")
                {
                    file = "C:\\Users\\U460624\\Desktop\\New Text Document - Copy.txt";
                }
                else if (again == "3")
                {
                    file = "C:\\Users\\U460624\\Desktop\\New Text Document (2).txt";
                }
                else
                {
                    cont = false;
                }
            }
        }
    }
}
