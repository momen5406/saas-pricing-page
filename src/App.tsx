import { useState } from "react";
import { PricingToggle } from "./components/PricingToggle";
import Plan from "./components/Plan";

function App() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: '$9',
      annualPrice: '$7',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 5 projects',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'Community access',
        'Mobile app access',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      monthlyPrice: '$29',
      annualPrice: '$23',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Advanced analytics',
        'Priority email support',
        'Custom integrations',
        'Team collaboration tools',
        'API access',
        'Advanced security features',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$99',
      annualPrice: '$79',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited everything',
        '1TB storage',
        'Custom analytics',
        '24/7 phone & email support',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced team permissions',
        'SLA guarantee',
        'On-premise deployment option',
        'Custom training sessions',
      ],
      cta: 'Contact Sales',
    },
  ];

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  }

  return (
    <div className="xl:w-6xl lg:w-5xl md:w-3xl px-5 m-auto mb-16">
      <header className="text-center my-10">
        <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-xl mt-2 text-gray-600">Choose the perfect plan for your needs. Always know what you'll pay.</p>
      </header>
      <PricingToggle isAnnual={isAnnual} onToggle={handleToggle}  />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {
          pricingPlans.map((plan) =>
            <Plan plan={plan} isAnnual={isAnnual} />
          )
        }
      </div>

      <section className="mt-28">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-5 md:w-2xl mx-auto mt-10">
          <div className="bg-white shadow p-5 rounded-xl">
            <h4 className="text-lg font-semibold">Can I change my plan later?</h4>
            <p className="text-gray-600 mt-2">Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>

          <div className="bg-white shadow p-5 rounded-xl">
            <h4 className="text-lg font-semibold">What payment methods do you accept?</h4>
            <p className="text-gray-600 mt-2">We accept all major credit cards, PayPal, and can arrange invoice billing for Enterprise customers.</p>
          </div>

          <div className="bg-white shadow p-5 rounded-xl">
            <h4 className="text-lg font-semibold">Is there a free trial?</h4>
            <p className="text-gray-600 mt-2">Yes! All plans come with a 14-day free trial. No credit card required to start.</p>
          </div>
        </div>
      </section>
      <footer className="mt-10 text-center">
        <p>Crafted with ❤️ by Mo’men Hussein.</p>
      </footer>
    </div>
  )
}

export default App
