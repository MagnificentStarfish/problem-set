function queueTime(customers, n) {
    console.log("queueTime function is being executed.");

    try {
      if (n === 0) {
        console.log("Tills are down!!");
        return "Tills are down!!";
      }
      if (n === 1) {
        const total = customers.reduce((sum, time) => sum + time, 0);
        console.log("Total time for one till:", total);
        return total;
      } else {
        const tills = Array(n).fill(0);
        for (const time of customers) {
          const minTill = tills.indexOf(Math.min(...tills));
          tills[minTill] += time;
        }

        const result = tills.reduce((sum, time) => sum + time, 0);
        console.log("Total time for all tills:", result);
        return result;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return "An error occurred.";
    }
  }

  let customers = [1, 2, 3, 4];
  let n = 2;

  queueTime(customers, n);
