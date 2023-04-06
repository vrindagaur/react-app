function validateForm() {
  var firstName = document.getElementById('first-name').value.trim();//.trim() method is used to remove any leading or trailing whitespace from the entered value.
  var middleName = document.getElementById('middle-name').value.trim();
  var lastName = document.getElementById('last-name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var country = document.getElementById('country').value.trim();
  var state = document.getElementById('state').value.trim();
  var district = document.getElementById('district').value.trim();
  var pincode = document.getElementById('pincode').value.trim();
  var skills = document.getElementById('skills').value.trim();

  if (firstName === '') {//=== is a comparison operator that checks if two values are equal in both value and data type. 
    alert('First name is required');
    return false;
  }

  if (lastName === '') {
    alert('Last name is required');
    return false;
  }

  if (email === '') {
    alert("Email is required");
    return false;
  }
  /*The indexOf() method searches the email address for the '@' symbol and returns the position of the first 
  occurrence of the '@' symbol in the string. If the '@' symbol is not found, the method returns -1.

The lastIndexOf() method searches the email address for the period symbol (.) and returns the position 
of the last occurrence of the period in the string. If the period symbol is not found, the method returns -1.*/

  if (email.indexOf('@') == -1 || email.lastIndexOf('.') == -1) {
    alert("Email is not valid");
    return false;
  }

  if (email.indexOf('@') > email.lastIndexOf('.')) {
    alert("Email is not valid");
    return false;
  }

  if (phone[0] <= 5 || phone.length != 10) {
    alert('Phone is Not Valid')
    return false;
  }

  if (pincode.length != 6) {
    alert('Pincode should be 6 digits');
    return false;
  }
  return true;
}
const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const districtDropdown = document.getElementById("district");

const statesByCountry = {
  "India": [
    "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chandigarh", "Chhattisgarh", "Dadra Nagar Haveli", "Daman Diu", "Delhi",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"

  ]
};

const districtByState = {
  "Andaman and Nicobar": [
    "Nicobar", "North Middle Andaman", "South Andaman"
  ],
  "Andhra Pradesh": [
    "Anantapur", "Chittoor", "East Godavari", "Alluri Sitarama Raju",
    "Anakapalli", "Annamaya", "Bapatla", "Eluru", "Guntur", "Kadapa", "Kakinada ",
    "Konaseema", "Krishna", "Kurnool", "Manyam", "N T Rama Rao", "Nandyal", "Nellore",
    "Palnadu", "Prakasam", "Sri Balaji", "Sri Satya Sai", "Srikakulam", "Visakhapatnam",
    "Vizianagaram", "West Godavari"
  ],
  "Arunachal Pradesh": [
    "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Itanagar Capital Complex",
    "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley",
    "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi",
    "Siang", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng",
    "West Siang"
  ],
  "Assam": [
    "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang",
    "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai",
    "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar",
    "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar",
    "Tinsukia", "Udalguri", "West Karbi Anglong"
  ],
  "Bihar": [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar",
    "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur",
    "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger",
    "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur",
    "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"
  ],
  "Chandigarh": [
    "Chandigarh"
  ],
  "Chhattisgarh": [
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur",
    "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurella Pendra Marwahi", "Janjgir-Champa",
    "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli",
    "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"
  ],
  "Dadra Nagar Haveli": [
    "Dadra Nagar Haveli"
  ],
  "Daman Diu": [
    "Daman", "Diu"
  ],
  "Delhi": [
    "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi",
    "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi",
    "West Delhi"
  ],
  "Goa": [
    "North Goa", "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar",
    "Botad", "Chhota Udepur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar",
    "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana",
    "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot",
    "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"
  ],
  "Haryana": [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram",
    "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh",
    "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa",
    "Sonipat", "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti",
    "Mandi", "Shimla", "Sirmaur", "Solan", "Una"
  ],
  "Jammu and Kashmir": [
    "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu",
    "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri",
    "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"
  ],
  "Jharkhand": [
    "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum",
    "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti",
    "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh",
    "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary",
    "Bidar", "Bijapur", "Chamarajanagar", "Chikkaballapura", "Chikmagalur",
    "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag",
    "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya",
    "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada",
    "Vijayapura", "Yadgir"
  ],
  "Kerala": [
    "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam",
    "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram",
    "Wayanad"
  ],
  "Ladakh": [
    "Kargil", "Leh"
  ],
  "Lakshadweep": [
    "Agatti", "Amini", "Androth", "Bithra", "Chethlath", "Kavaratti", "Kadmat", "Kalpeni",
    "Kilthan", "Minicoy"
  ],
  "Madhya Pradesh": [
    "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul",
    "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh",
    "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad",
    "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla",
    "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh",
    "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur",
    "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria",
    "Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana",
    "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna",
    "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded",
    "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad",
    "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim",
    "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam",
    "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong",
    "Tengnoupal", "Thoubal", "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills",
    "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills",
    "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha",
    "Serchhip"
  ],
  "Nagaland": [
    "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek",
    "Tuensang", "Wokha", "Zunheboto"
  ],
  "Odisha": [
    "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh",
    "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda",
    "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput",
    "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada",
    "Sambalpur", "Sonepur", "Sundargarh"
  ],
  "Puducherry": [
    "Karaikal", "Mahe", "Puducherry", "Yanam"
  ],
  "Punjab": [
    "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka",
    "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana",
    "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar",
    "Sahibzada Ajit Singh Nagar", "Sangrur", "Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner",
    "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar",
    "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur",
    "Karauli", "Kota", "Nagaur", "Pali", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi",
    "Tonk", "Udaipur"
  ],
  "Sikkim": [
    "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"
  ],
  "Tamil Nadu": [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri",
    "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur",
    "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
    "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Tiruchirappalli",
    "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "Vellore", "Viluppuram",
    "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhoopalpally",
    "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem",
    "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal–Malkajgiri", "Mulugu",
    "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli",
    "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad",
    "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"
  ],
  "Tripura": [
    "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura",
    "Unakoti", "West Tripura"
  ],
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi",
    "Amroha", "Auraiya", "Azamgarh", "Badaun", "Baghpat", "Bahraich",
    "Ballia", "Balrampur", "Banda", "Bara Banki", "Bareilly",
    "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli",
    "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad",
    "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur",
    "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur",
    "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj",
    "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow",
    "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau",
    "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit",
    "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal",
    "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar",
    "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
  ],
  "Uttarakhand": [
    "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun",
    "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag",
    "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
  ],
  "West Bengal": [
    "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
    "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram",
    "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia",
    "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur",
    "Purulia", "South 24 Parganas", "Uttar Dinajpur"
  ]
}

/*The first event listener is added to the countryDropdown element and listens for a "change" event.
 When the selected country is changed, the code retrieves the value of the selected country using the value 
 property of the countryDropdown element.

If a country is selected, the code retrieves the list of states for the selected country from the statesByCountry

object, which is typically a JavaScript object or an array of objects with key-value pairs.

The second event listener is added to the stateDropdown element and listens for a "click" event. When a state is selected,
 the code retrieves the value of the selected state using the value property of the stateDropdown element.

The code then retrieves the list of districts for the selected state from the districtByState object, which is typically a 
JavaScript object or an array of objects with key-value pairs.
The code then clears the options in the districtDropdown element by setting its innerHTML property to an empty string.

Finally, the code loops through the list of districts and creates a new option element for each district. The value and text 
properties of the option element are set to the district name,
 and the option element is added to the districtDropdown element using the add method. */
countryDropdown.addEventListener("change", () => {
  const selectedCountry = countryDropdown.value;

  if (selectedCountry) {
    const states = statesByCountry[selectedCountry];
    stateDropdown.addEventListener("click", () => {
      const selectedState = stateDropdown.value;
      const districts = districtByState[selectedState];

      districtDropdown.innerHTML = "";

      for (const district of districts) {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtDropdown.add(option);
      }

    })
    /*If a country is selected, the code retrieves the list of states for the selected country from the statesByCountry object, 
    which is typically a JavaScript object or an array of objects with key-value pairs.

The code then clears the options in the stateDropdown element by setting its innerHTML property to an empty string.

Next, the code loops through the list of states and creates a new option element for each state. The value and text properties of the option element are set to the state name, and the option element is 
added to the stateDropdown element using the add method.
Finally, the code enables the stateDropdown element by setting its disabled property to false.

If no country is selected, the code clears the options in the stateDropdown and districtDropdown elements and disables the stateDropdown
 element by setting its disabled property to true. */

    stateDropdown.innerHTML = "";

    for (const state of states) {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      stateDropdown.add(option);
    }

    stateDropdown.disabled = false;
  }
  else {
    stateDropdown.innerHTML = "";
    districtDropdown.innerHTML = "";
    stateDropdown.disabled = true;
  }
});
const form = document.getElementById("profile-form");
/*ddEventListener() method is used to add a "submit" event listener to the form, which is triggered when the user 
submits the form by clicking on the submit button or pressing the enter key.

The code then defines a callback function to be executed when the "submit" event is triggered. 
The event.preventDefault() method is called to prevent the default action of submitting the form to the server and refreshing the page.

The code then checks if the validateForm() function returns a falsy value (i.e., false, null, undefined,
   0, or an empty string). If the validateForm() function returns a falsy value, the code uses the return statement
    to exit the callback function and prevent the form from being submitted. 
If the validateForm() function returns a truthy value, the callback function continues with its execution.*/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }

  var firstName = document.getElementById('first-name').value + " ";
  var middleName = document.getElementById('middle-name').value + " ";
  var lastName = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var country = document.getElementById('country').value;
  var state = document.getElementById('state').value;
  var district = document.getElementById('district').value;
  var pincode = document.getElementById('pincode').value;
  var skills = document.getElementById('skills').value;
  var fileInput = document.getElementById('fileInput');

  const formData = {
    fileInput,
    firstName,
    middleName,
    lastName,
    email,
    phone,
    country,
    state,
    district,
    pincode,
    skills
  };

  displayPortfolio(formData);

});

function displayPortfolio(formData) {
  const form = document.getElementById("profile-form");
  form.style.display = "none";
  const portfolio = document.getElementById("portfolio");
  portfolio.style.display = "block"
  /*The code you provided creates a function called displayPortfolio that appears to be triggered by
   a form submission. When the function is called,
   it hides the form (profile-form) and shows a portfolio section (portfolio). */

  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function () {
    var imageUrl = reader.result;
    var img = document.createElement('img');
    img.src = imageUrl;

    portfolio.appendChild(img);
    /*It then retrieves the file uploaded by the user via an input element with the id fileInput, creates a FileReader 
    object to read the contents of the file, and sets an onload event handler that will be called when the file has finished loading.

Once the file has been read, the onload event handler creates an img element and sets its source to the loaded file's data URL (imageUrl). 
It then appends the img element to the portfolio section. */

    var a = document.createElement('a');
    a.href = imageUrl;
    a.download = file.name;
    a.click();
    /*The code then creates an a element with a href attribute set to the imageUrl and a download attribute set to the name of the
     file (file.name). Finally, it triggers a click on the a element, which
     will download the file to the user's device. */
    const nameElement = document.createElement("h2");
    nameElement.setAttribute("id", "myname");
    nameElement.textContent = formData.firstName + formData.middleName + formData.lastName;
    /*nameElement is created as an h2 element with an id attribute set to "myname". Its content is set to the concatenation of
     the formData.
    firstName, formData.middleName, and formData.lastName properties. */

    const emailElement = document.createElement("p");
    emailElement.setAttribute("id", "myemail");
    emailElement.textContent = formData.email;

    const phoneElement = document.createElement("p");
    phoneElement.textContent = formData.phone;

    const cityElement = document.createElement("p");
    cityElement.textContent = formData.district + ", " + formData.state + ", " + formData.country + ".";

    const pincodeElement = document.createElement("p");
    pincodeElement.textContent = formData.pincode;

    const skillsElement = document.createElement("p");
    skillsElement.innerHTML = "IT Skills: " + formData.skills;


    portfolio.appendChild(nameElement);
    portfolio.appendChild(emailElement);
    portfolio.appendChild(phoneElement);
    portfolio.appendChild(cityElement);
    portfolio.appendChild(pincodeElement);
    portfolio.appendChild(skillsElement);
  };
  reader.readAsDataURL(file);
  /*The reader.readAsDataURL(file) line initiates the reading of the file specified by the user in the fileInput element,
   using the FileReader object reader created earlier.

This method reads the contents of the file and returns a data URL that represents the file's contents as a base64-encoded string.

The data URL is used to display the file on the webpage as an image in the img element created earlier. */
}


