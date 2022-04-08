import { firstSelect, lastSelect, nbrOfPer } from "../main.js";
import { reservCon } from "./Calendar.js";


const summary = (name, total, deposit) => {
  reservCon.classList.add("avoid-clicks");

  return `<div class="summary">
                    <div class="move-back">
                        <button class="back-btn">
                            <img src="icons/left-arrow.png" alt="">
                        </button>
                    </div>
                    <div class="sum-data">
                        <div class="sum-data-heading">
                            <p>Contact details</p>
                        </div>
                        <form>
                            <label for="name">Name:&nbsp;<span>*</span></label>
                            <input type="text" id="name" required>
                            <label for="surname">Surname:&nbsp;<span>*</span></label>
                            <input type="text" id="surname" required>
                            <label for="email">Email:&nbsp;<span>*</span></label>
                            <input type="email" id="email" required>
                            <label for="phone">Phone:&nbsp;<span>*</span></label>
                            <input type="number" id="phone" required>
                        </form>
                        <div class="sum-data-confirmations">
                            <input type="checkbox" id="invoice">
                            <label for="invoice">I would like recieve invoice.</label>

                            <input type="checkbox" id="terms" required>
                            <label for="terms">I understand that by clicking "BOOK NOW" I have read and agreed to the terms and conditions of the: <a
                                    href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjU_s_Hxo30AhVrwIsKHVLZC4UQFnoECAMQAQ&url=https%3A%2F%2Fportdattache.com%2Fconditions_us.pdf&usg=AOvVaw2KCIuju_pCqMozs-EDMbJf"
                                    target="blank">reservation</a>. <span>*</span> </label>

                            <input type="checkbox" id="email-offers">
                            <label for="email-offers">I would like to receive exclusive offers, vouchers and information about your products and events.</label>

                        </div>
                        <div class="additional-info">
                            By clicking the <strong>"BOOK NOW"</strong> button you agree to the processing of your personal data effected in order to complete the reservation. The administrator of your personal data is Jumeirah Hotel Management Services.
                        </div>

                    </div>
                    <div class="sum-payment">
                        <div class="sum-payment-heading">
                            <p>Reservation summary</p>
                        </div>
                        <div class="sum-payment-dates">
                            <div class="dates-from">
                                <p><strong>${new Date(
                                  firstSelect
                                ).toDateString()}</strong> <br/> from 15:00</p>
                            </div>
                            <img src="icons/arrow.png" alt="">
                            <div class="dates-to">
                                <p><strong>${new Date(
                                  lastSelect
                                ).toDateString()}</strong> <br/> by 11:00</p>
                            </div>
                        </div>
                        <div class="sum-payment-room">
                            <p>${name}</p>
                            <p>Number of people: ${nbrOfPer}</p>
                        </div>
                        <div class="sum-payment-total">
                            <div class="total">
                                <p>Total</p>
                                <p>$${total}</p>
                            </div>
                            <div class="prepayment">
                                <p>Prepayment</p>
                                <p>$${((total * deposit) / 100).toFixed(2)}</p>
                            </div>
                            <div class="remaining-amount">
                                <p>Upon arrival</p>
                                <p>$${(total - (total * deposit) / 100).toFixed(
                                  2
                                )}</p>
                            </div>
                        </div>
                        <div class="sum-payment-info">
                            <p>*the Jumeirah Hotel Club discount will be accepted upon hotel check-in</p>
                        </div>
                        <button>Book Now</button>
                    </div>
                </div>  `;
};

export { summary};