export const formatCurrency = (amount) => {
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}k `;
    }
    return `${amount}`;
  };
  
