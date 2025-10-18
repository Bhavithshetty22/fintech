"use client";
import { useRef } from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Chatbot } from "./chatbot";

const Header = () => {
  const chatbotRef = useRef(null); // Ref to control the chatbot

  return (
    <>
    <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 border-b border-blue-800/30">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <div className="flex items-center gap-3">
  {/* Monogram */}
 
  {/* Wordmark */}
  <h1 className="text-2xl font-bold tracking-tight text-white/90">
    <span className="text-white">Budget</span>
    <span className="text-blue-300">Beacon</span>
  </h1>
</div>

        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-blue-200 hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-blue-200 hover:text-blue-400 transition-colors">
              Testimonials
            </a>
          </SignedOut>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="bg-white border-blue-600 text-blue-500 hover:bg-blue-600/30 hover:text-blue-200 flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>

            {/* Chatbot Button */}
           
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </SignedIn>
        </div>
      </nav>

      {/* Chatbot Component */}
    
    </header>
      <Chatbot ref={chatbotRef} />
      </>
  )
};

export default Header;
