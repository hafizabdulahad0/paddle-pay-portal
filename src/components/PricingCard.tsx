
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelect }) => {
  return (
    <Card className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      plan.popular 
        ? 'border-2 border-blue-500 shadow-lg transform scale-105' 
        : 'border border-gray-200 hover:border-blue-300'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="h-3 w-3" />
            Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="text-gray-600 text-sm">{plan.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
          <span className="text-gray-600">/{plan.period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="px-6">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="px-6 pt-4">
        <Button
          onClick={onSelect}
          className={`w-full py-3 font-semibold transition-all duration-200 ${
            plan.popular
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
