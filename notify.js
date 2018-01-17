module.exports = ({ config }) => {
  const { name } = config;

  return new Promise((resolve, reject) => {
    resolve(`Hello ${name}`);
  });
};
