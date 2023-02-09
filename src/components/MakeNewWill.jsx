import { useRef } from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
function MakeNewWill({ Signer }) {
  const amount = useRef();
  const name = useRef();
  const age = useRef();
  const time = useRef();
  const address = useRef();
  const [cansetDate, setCansetDate] = useState(true);
  const getData = async () => {
    const data = await Signer?.getMyWill();
    if (Number((data?.timestamp).toString()) > 0) {
      setCansetDate(false);
    }
  };

  const makeMyWill = async () => {
    if (
      amount.current != " " &&
      name.current != " " &&
      age.current != " " &&
      address.current != " "
    ) {
      const transaction = await Signer.makeMyWill(
        address.current.value,
        amount.current.value,
        {
          value: ethers.utils.parseEther(amount.current.value),
        }
      );
      await transaction.wait().then(() => {
        window.location.reload();
      });
    } else {
      // do whatever you want to do
    }
  };
  const setTime = async () => {
   // if (time.current.value != " ") {
      let timeStamp = new Date(time.current.value).getTime();
      try {
        await Signer.setTimeLimit(timeStamp).then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    //}
  };
  useEffect(() => {
    getData();
  }, [Signer]);
  return (
    <>
      <section>
        <div class="row">
          <div class="image">
            <img src="./will2.png" alt="" />
          </div>

          <form action="" method="post">
            <h3>Create a new will</h3>
            <input
              type="number"
              name="guests"
              required
              class="box"
              maxlength="20"
              placeholder="amount in (eth)"
              min="0"
              max="99"
              ref={amount}
              onkeypress="if(this.value.length == 2) return false"
            />
            <input
              type="text"
              name="name"
              required
              class="box"
              maxlength="20"
              ref={name}
              placeholder="enter your beneficiary name"
            />
            <input
              type="number"
              name="guests"
              required
              class="box"
              maxlength="20"
              placeholder="age of beneficiary"
              min="0"
              max="99"
              ref={age}
              onkeypress="if(this.value.length == 2) return false"
            />
            <input
              type="text"
              name="name"
              required
              class="box"
              ref={address}
              placeholder="Enter beneficiary wallet address"
            />
            <input
              type="date"
              name="name"
              required
              class="box"
              ref={time}
              maxlength="20"
              placeholder="Enter time span"
              disabled={!cansetDate}
            />
            <div style={{ display: "flex", marginTop: "10px" }}>
              <button
                style={{ marginRight: "10px" }}
                class="button button--flex"
                onClick={() => makeMyWill()}
              >
                Confirm
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
              <button
                class="button button--flex"
                disabled={!cansetDate}
                onClick={() => setTime()}
              >
                Set time
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default MakeNewWill;
