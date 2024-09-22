let seatBooking = document.getElementById("seat-booking");
let totalBooked = document.getElementById("total-booked")
let availableSeats = document.getElementById("available-seats")
let totalPrice = document.getElementById("total-price");
let couponField = document.getElementById("coupon-field");
let couponBtn = document.getElementById("coupon-btn");
let defaultText = document.getElementById("default-text");
let grandTotal = document.getElementById("grand-total");

let selectSeat = [];
let updateTotalPrice = 0;

function handleSelectSeat(event) {
    let value = event.innerText;

    if(selectSeat.includes(value)){
        return alert("Seat has already booked")
    }
    else if(selectSeat.length < 4) {
        event.classList.add("bg-primary");
    event.classList.add("text-white")

    selectSeat.push(event.innerText);
    totalBooked.innerText = selectSeat.length;

    // decrease seats
    // let availableSeatsValue = parseInt(availableSeats.innerText);
    // let updatedAvailableSeats = availableSeatsValue - 1;
    // availableSeats.innerText = updatedAvailableSeats;

    defaultText.classList.add("hidden");

    seatBooking.innerHTML += 
    `<li class="flex justify-between text-base font-normal">
        <span>${ event.innerText }</span>
        <span>Economy</span>
        <span>550</span>
    </li>`

    // update total price
    updateTotalPrice += 550;
    //console.log(typeof totalPrice.innerText);
    totalPrice.innerText = updateTotalPrice.toFixed(2);

    // active coupon button
    if(selectSeat.length > 3){
        couponField.removeAttribute("disabled");
        couponBtn.removeAttribute("disabled");
    }
    }
    else {
        return alert("Maximum seats booked")
    }
    document.getElementById("coupon-btn").addEventListener("click", function(){
        let couponInputValue = couponField.value;
        let couponSave = 0;
        
        if(couponInputValue != "NEW50" && couponInputValue != "Couple 20"){
            return alert("Invalid Coupon")
        }
        if(couponInputValue == "NEW50"){
            couponSave = parseInt(totalPrice.innerText) * .15;
        }
        else if(couponInputValue == "Couple 20"){
            couponSave = parseInt(totalPrice.innerText) * .20;
        }

        let grandTotalValue = totalPrice.innerText - couponSave;
        grandTotal.innerText = grandTotalValue.toFixed(2);
    })
}