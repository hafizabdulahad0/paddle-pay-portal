
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, amount, email } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </CardTitle>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium">{plan} Plan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">${amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-medium font-mono text-sm">#TXN-{Date.now()}</span>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm text-gray-600">We've sent you a confirmation email with your receipt</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Download className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Access your account</p>
                  <p className="text-sm text-gray-600">Your {plan} plan is now active and ready to use</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-3 pt-6">
          <Button 
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.print()}
            className="w-full"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
