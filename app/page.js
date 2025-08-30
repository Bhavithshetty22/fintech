import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  BarChart3, 
  CreditCard,
  Users,
  Star,
  Download,
  Link2,
  Activity
} from "lucide-react";

const LandingPage = () => {
  // Mock data
  const statsData = [
    { value: "50K+", label: "Active Users" },
    { value: "$2.5M", label: "Money Managed" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9★", label: "User Rating" }
  ];

  const featuresData = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Smart Analytics",
      description: "Get detailed insights into your spending patterns with AI-powered analytics and personalized recommendations."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Bank-Level Security",
      description: "Your data is protected with military-grade encryption and multi-factor authentication."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Mobile First",
      description: "Manage your finances on-the-go with our intuitive mobile app available on all devices."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Investment Tracking",
      description: "Track your portfolio performance and get real-time market insights and alerts."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Expense Management",
      description: "Categorize and track expenses automatically with smart receipt scanning technology."
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      title: "Real-time Sync",
      description: "All your accounts sync in real-time across all your devices for up-to-date information."
    }
  ];

  const howItWorksData = [
    {
      icon: <Download className="w-8 h-8 text-white" />,
      title: "Download & Sign Up",
      description: "Get started in minutes with our simple registration process"
    },
    {
      icon: <Link2 className="w-8 h-8 text-white" />,
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts and credit cards"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Track & Optimize",
      description: "Watch your financial health improve with smart insights"
    }
  ];

  const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      quote: "Welth has completely transformed how I manage my finances. The insights are incredible!",
      image: "/api/placeholder/40/40"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      quote: "The best financial app I've ever used. Clean interface and powerful features.",
      image: "/api/placeholder/40/40"
    },
    {
      name: "Emily Davis",
      role: "Small Business Owner",
      quote: "Managing both personal and business finances has never been easier. Highly recommend!",
      image: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-fade-in">
              Take Control of Your
              <span className="block text-blue-400">Financial Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              The most powerful and intuitive financial management platform designed to help you make smarter money decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Start Free Trial
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/40 backdrop-blur-sm border-y border-blue-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to
              <span className="block text-blue-400">Manage Your Finances</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Powerful tools and intelligent insights to help you make better financial decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="bg-black/40 border-blue-800/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <CardContent className="p-8 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-r from-blue-950/50 to-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
            Get Started in <span className="text-blue-400">3 Simple Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-blue-200 text-lg leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
            What Our <span className="text-blue-400">Users Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="bg-black/40 border-blue-800/30 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-blue-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                 <p className="text-blue-100 text-lg leading-relaxed italic">
  &ldquo;{testimonial.quote}&rdquo;
</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your
            <span className="block text-blue-100">Financial Future?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who are already managing their finances smarter with Welth. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Free Trial
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-black hover:text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Contact Sales
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
