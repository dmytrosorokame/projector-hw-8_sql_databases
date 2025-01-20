const generateRandomDateOfBirth = () => {
  const start = new Date(1950, 0, 1);
  const end = new Date(2000, 0, 1);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateUser = () => ({
  email: `email-test${Math.random()}@example.com`,
  date_of_birth: generateRandomDateOfBirth(),
});

module.exports = {
  generateUser,
};
