const sendRequest = async (endpoint: string) => {
  return await fetch('http://192.168.17.187:3000/api/v1/' + endpoint).then(
    (d) => d.json(),
  );
};
export default sendRequest;
