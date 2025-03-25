
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { DollarSign, Plus, Minus } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ amount: initialAmount }) => {
  const [amount, setAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [message, setMessage] = useState<string>('');

  // PayPal client ID - Replace with your actual client ID in production
  const clientId = "sb"; // For sandbox testing

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
    setIsCustom(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow only numbers and decimal points
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setCustomAmount(value);
      if (value !== '') {
        setAmount(parseFloat(value));
      } else {
        setAmount(0);
      }
    }
  };

  const handleCreateOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: "USD"
          },
          description: "Donation to David Suzuki Foundation"
        }
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    });
  };

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      setMessage(`Thank you for your donation of $${amount}!`);
      console.log('Payment completed', details);
    });
  };

  const handleError = (err: Record<string, unknown>) => {
    console.error('Payment error:', err);
    setMessage('There was an error processing your donation. Please try again.');
  };

  const predefinedAmounts = [25, 50, 100, 250];

  return (
    <div className="w-full max-w-md">
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
          {message}
        </div>
      )}
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select donation amount</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {predefinedAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => handleAmountChange(amt)}
              className={`py-2 px-4 rounded-md border ${
                amount === amt && !isCustom
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-green-500'
              }`}
            >
              ${amt}
            </button>
          ))}
        </div>
        
        <div className="flex items-center mb-1">
          <input
            id="custom-amount"
            type="checkbox"
            checked={isCustom}
            onChange={() => {
              setIsCustom(!isCustom);
              if (!isCustom && customAmount !== '') {
                setAmount(parseFloat(customAmount));
              }
            }}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="custom-amount" className="ml-2 block text-sm text-gray-700">
            Enter custom amount
          </label>
        </div>
        
        {isCustom && (
          <div className="mt-2 relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Other amount"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
              autoFocus
            />
          </div>
        )}
      </div>
      
      <PayPalScriptProvider options={{ "client-id": clientId, currency: "USD" }}>
        <PayPalButtons
          style={{ layout: "vertical", shape: "rect" }}
          createOrder={handleCreateOrder}
          onApprove={handleApprove}
          onError={handleError}
          disabled={amount <= 0}
        />
      </PayPalScriptProvider>
      
      <p className="text-xs text-gray-500 mt-4">
        Your donation helps support our programs and initiatives. The David Suzuki Foundation is a registered charity.
      </p>
    </div>
  );
};

export default PaymentButton;
