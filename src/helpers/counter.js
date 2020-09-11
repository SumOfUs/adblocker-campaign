const CounterUtils = {
  async increment() {
    console.log("counter");
    const options = {
      method: "PUT",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    };

    const res = await fetch(
      "https://aza6ttiq2i.execute-api.eu-west-1.amazonaws.com/prod/adblockerdownloads/1",
      options
    );
    res
      .json()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export { CounterUtils };
