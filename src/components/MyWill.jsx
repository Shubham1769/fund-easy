import { useEffect, useState, useRef } from "react";
function MyWill({ Signer, address }) {
  const [benefeciaries, setBenefeciaries] = useState();
  const [totalAmt, setTotalAmt] = useState();
  const [canDeposit, setCanDeposit] = useState(false);
  const loadData = async () => {
    try {
      const data = await Signer?.getMyWill();
      setBenefeciaries(data);
      let total = 0;
      data?.participants.forEach((el) => {
        total += Number((el?.amount).toString());
      });
      if ((data?.timestamp).toString() > String(new Date().getTime())) {
        setCanDeposit(false);
      } else {
        transferAmount();
        setCanDeposit(true);
      }
      setTotalAmt(total);
      // window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [Signer]);
  const deleteWill = async () => {
    try {
      const transaction = await Signer.deleteMyWill();
      await transaction.wait().then((res) => {
        if (res) {
          console.log("funds transfered");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const withDrawl = async () => {
    try {
      const transaction = await Signer.with_drawal();
      await transaction.wait().then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const transferAmount = async () => {
    try {
      const transaction = await Signer.transferFunds();
      await transaction.wait().then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section class="about section container" id="about">
        <div class="about__container grid">
          <img src="./profile.png" alt="" class="about__img" />

          <div class="about__data">
            <h2 class="section__title about__title">PROFILE</h2>

            <p class="about__description">
              Name: {address} <br />
              Total Fund: {totalAmt ?? 0}( in wei)
            </p>
            {benefeciaries?.participants.map((el, i) => {
              return (
                <div class="about__details" key={i}>
                  <p class="about__details-description">
                    <i class="ri-checkbox-fill about__details-icon"></i>
                    Benefeciary no. {i + 1}. <br />
                    amount: {el.amount.toString()} Wei <br />
                    wallet address: {el._address}
                  </p>
                </div>
              );
            })}
            <div style={{ display: "flex" }}>
              <button
                style={{ marginRight: "20px" }}
                class="button button--flex"
                onClick={deleteWill}
              >
                Delete will
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
              <button
                style={{ marginRight: "20px" }}
                class="button button--flex2"
                onClick={withDrawl}
              >
                Withdrawl
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
              <button
                style={{ marginRight: "20px" }}
                class="button button--flex2"
                onClick={withDrawl}
              >
                Exchange
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
              <button
                class="button button--flex2"
                onClick={transferAmount}
                disabled={!canDeposit}
              >
                Transfer
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MyWill;
