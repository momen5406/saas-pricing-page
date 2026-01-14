import type { PlanType } from '../types/plans.type'

const Plan = ({plan, isAnnual}: {plan: PlanType, isAnnual: boolean}) => {
  return (
    <div className={`relative bg-white p-8 rounded-2xl border hover:shadow-md transition ${plan.popular ? "border-blue-500 shadow-xl shadow-blue-100 hover:shadow-md hover:shadow-blue-100" : "border-gray-200 hover:shadow-gray-200"}`}>
      {plan.popular && <span className='absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-purple-700 text-white text-sm px-4 py-1 rounded-full'>Most Popular</span>}
      <h5 className='text-lg font-semibold'>{plan.name}</h5>
      <p className='text-sm text-gray-600 mt-2 mb-6'>{plan.description}</p>
      <h6>
        <span className='text-5xl font-bold'>{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
        <span className='text-gray-600 ml-2'>/month</span>
      </h6>
      <button className={`cursor-pointer block w-full text-white my-6 text-lg py-3 font-semibold rounded-xl transition ${plan.popular ? "bg-linear-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800" : "bg-gray-950 hover:bg-gray-800"}`}>{plan.cta}</button>
      <ul className='flex flex-col gap-3'>
        {
          plan.features.map((feature) => (
            <li className='text-gray-600'>✅ {feature}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Plan