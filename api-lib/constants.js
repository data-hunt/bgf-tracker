export const ValidateProps = {
  user: {
    username: { type: 'string', minLength: 4, maxLength: 20 },
    name: { type: 'string', minLength: 1, maxLength: 50 },
    password: { type: 'string', minLength: 8 },
    email: { type: 'string', minLength: 1 },
    bio: { type: 'string', minLength: 0, maxLength: 160 },
  },
  transaction: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
    date: { type: 'string', minLength: 1, maxLength: 280 },
    collectionName: { type: 'string', minLength: 1, maxLength: 280 },
    collectionNumber: { type: 'string', minLength: 1, maxLength: 6 },
    purchaseCost: { type: 'string', minLength: 1, maxLength: 280 },
    transactionType: { type: 'string', minLength: 1, maxLength: 280 },
    acquisitionSource: { type: 'string', minLength: 1, maxLength: 280 },
  },
  // comment: {
  //   content: { type: 'string', minLength: 1, maxLength: 280 },
  // },
};
