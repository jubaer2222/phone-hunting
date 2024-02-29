// asyan এর পর প্যারামিটার হিসাবে searchText কে পাঠায় এটা ${searchText} এ বসাবো ।এরপর এটাকে search বাটন ওয়ে ওখানে বসায় দিবো loadPhone(searchText) প্যারামিটার হিসাবে searchText কে বসায় দিবো.৪০ নং লাইন এ


const loadPhone = async (searchText) => {
   const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
   const data = await res.json();
    const phones = data.data
    displayPhone(phones);
}




const displayPhone = phones =>{

   // etake loop er moddhe rakh bo na
const phoneContainer = document.getElementById('phone-container');
// নতুন করে সার্চ করে আগের ডটা ক্লিয়ার করার জন্য 
phoneContainer.textContent = '';

// যদি ১২ টার বেশি দেখতে চায় তাহলে 
const showAllContainer = document.getElementById('show-all-container')
if(phones.length>12){
    showAllContainer.classList.remove('hidden') 
}
else{
   showAllContainer.classList.add('hidden') 
}
// শুধুমাত্র প্রথম ১২ টা ফোন দেখাবো সার্চ দিলে তাহলে
phones=phones.slice(0,12)



phones.forEach(phone => {
    console.log(phone);

        // step 2: CREATE A DIV
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-4  bg-base-100 shadow-xl`;
    // step 3: set inner html
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
    `
    // step 4: append child
    phoneContainer.appendChild(phoneCard);
});

}

const handleSearch = () =>{
const searchField =document.getElementById('search-field');
const searchText = searchField.value;
console.log(searchText)
loadPhone(searchText)
}


// loadPhone();এটার প্রয়োজন নাই