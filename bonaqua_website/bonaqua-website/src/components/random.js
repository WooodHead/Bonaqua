function fetchDeparture(city) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(city);
        setShow(true)
      }, 500);
    });
  }

  async function fetchSentence() {
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    serialLength = 8,
    randomSerial = "",
    randomNumber;

    for (let i = 0; i < serialLength; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
    }

    try {
      document.getElementById('ordernumber').innerHTML = "Захиалгын дугаар үүсгэгдэж байна...";
      let departure = await fetchDeparture(randomSerial);
      return `${departure}`
    } catch (error) {
      return 'Захиалгын дугаар үүсгэх боломжгүй!'
    }
  }

  (async () => {
    const sentence = await fetchSentence();
    document.getElementById('ordernumber').innerHTML = sentence;
    setRandom(sentence);
  })();