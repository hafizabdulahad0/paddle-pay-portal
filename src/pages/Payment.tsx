
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import CheckoutForm from '../components/CheckoutForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Star } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 5 projects',
        'Basic support',
        '10GB storage',
        'Standard templates',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 79,
      period: 'month',
      description: 'Best for growing businesses',
      features: [
        'Unlimited projects',
        'Priority support',
        '100GB storage',
        'Premium templates',
        'Phone & email support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Unlimited storage',
        'Custom development',
        '24/7 phone support',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowCheckout(true);
  };

  const selectedPlanDetails = pricingPlans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">PayFlow</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {!showCheckout ? (
          // Pricing Section
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Choose Your Plan
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select the perfect plan for your needs. Upgrade or downgrade at any time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onSelect={() => handlePlanSelect(plan.id)}
                />
              ))}
            </div>

            {/* Features Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Why Choose PayFlow?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                  <p className="text-gray-600">Bank-level security with encrypted transactions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer assistance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                  <p className="text-gray-600">Simple setup with your existing workflow</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Checkout Section
          <CheckoutForm
            plan={selectedPlanDetails!}
            onBack={() => setShowCheckout(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Payment;
