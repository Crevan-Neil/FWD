import Link from 'next/link'
import { Brain, ArrowLeft, Book, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BeginnersGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-primary shadow-md">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-8 w-8 text-white" />
          <span className="ml-2 text-2xl font-bold text-white">StockAI Pro</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
            <Link href="/" className="text-white hover:underline mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-6">Beginners Guide to Stock Market</h1>
            <p className="text-lg text-zinc-200 max-w-2xl mx-auto mb-6">
              A comprehensive guide designed to help newcomers understand the stock market. Start your learning journey now!
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-4">Why Our Beginners Guide?</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start text-gray-700">
                    <Check className="mr-2 h-6 w-6 text-green-500" />
                    <span>Tailored for absolute beginners with no prior knowledge</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="mr-2 h-6 w-6 text-green-500" />
                    <span>Interactive lessons with real-world examples</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="mr-2 h-6 w-6 text-green-500" />
                    <span>AI-powered personalized learning path</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <Check className="mr-2 h-6 w-6 text-green-500" />
                    <span>Progress tracking and performance analytics</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-4">What You'll Learn</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center text-gray-700">
                    <Book className="mr-2 h-6 w-6 text-primary" />
                    <span>Basic stock market terminology</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Book className="mr-2 h-6 w-6 text-primary" />
                    <span>How to read and interpret stock charts</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Book className="mr-2 h-6 w-6 text-primary" />
                    <span>Understanding different investment strategies</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Book className="mr-2 h-6 w-6 text-primary" />
                    <span>Risk management techniques for beginners</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Book className="mr-2 h-6 w-6 text-primary" />
                    <span>How to make your first trade</span>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Basic Stock Market Terminology</h3>
              <p className="text-lg text-gray-700">
                Understanding key terms is essential for navigating the stock market. Familiarize yourself with concepts like stocks, shares, dividends, and market capitalization to build a solid foundation.
                <br />
                For more details, visit: <a href="https://www.webnots.com/100-essential-stock-market-terms-for-beginners/?utm_source=chatgpt.com" className="text-primary hover:underline">Essential Stock Market Terms</a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">How to Read and Interpret Stock Charts</h3>
              <p className="text-lg text-gray-700">
                Stock charts visually represent a company's stock performance over time. Learning to read these charts helps identify trends, support and resistance levels, and potential entry or exit points for trades.
                <br />
                For more details, visit: <a href="https://www.schwab.com/learn/story/how-to-read-stock-charts-and-trading-patterns?utm_source=chatgpt.com" className="text-primary hover:underline">Learn to Read Stock Charts</a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Understanding Different Investment Strategies</h3>
              <p className="text-lg text-gray-700">
                There are various approaches to investing, including long-term investing, day trading, and swing trading. Each strategy has its own risk profile and time commitment. It's important to choose a strategy that aligns with your financial goals and risk tolerance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Risk Management Techniques for Beginners</h3>
              <p className="text-lg text-gray-700">
                Effective risk management is crucial for protecting your investments. Techniques such as setting stop-loss orders, diversifying your portfolio, and only investing money you can afford to lose can help mitigate potential losses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">How to Make Your First Trade</h3>
              <p className="text-lg text-gray-700">
                Making your first trade involves selecting a brokerage platform, funding your account, researching potential stocks, and executing a buy or sell order. Start with a small investment to gain experience and gradually increase your exposure as you become more comfortable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-zinc-500">© 2024 StockAI Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
