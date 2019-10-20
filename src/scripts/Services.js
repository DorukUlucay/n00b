export {
    Services,
    ServicePaymentType
  }
  
  const ServicePaymentType = {
    Percent: 'Percent',
    Free: 'Free',
    Monthly: 'Monthly'
  }
  
  var Services = {
    FreelanceBoard: {
      paymentType: ServicePaymentType.Percent,
      amount: 10
    },
    CareerFinder: {
      paymentType: ServicePaymentType.Free
    },
    Music: {
      paymentType: ServicePaymentType.Monthly,
      amount: 5,
      boost: 0.2
    }
  }