var form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    var companyname = document.getElementById('companyname').value

   var companyemail = document.getElementById('companyemail').value

 var companyphone = document.getElementById('companyphone').value

 var companywebsite = document.getElementById('companywebsite').value

       var contactname = document.getElementById('contactname').value

 var contactphone = document.getElementById('contactphone').value

    var contactemail = document.getElementById('contactemail').value

    var notes = document.getElementById('notes').value

    var businessValues = {
        smallbusiness: document.getElementById('smallbusiness').checked,

        enterprise: document.getElementById('enterprise').checked,

        entrepreneur: document.getElementById('entrepreneur').checked,
    }
 var BusinessType = ""
    var key = Object.keys(businessValues)
    for (i = 0; i < key.length; i++) {
        if (businessValues[key[i]] == true) {
            BusinessType = document.getElementById(key[i]).value
        }
    }

       var categoryValues = {
        Clothes: document.getElementById('Clothes').checked,
        Toys: document.getElementById('Toys').checked,
        Groceries: document.getElementById('Groceries').checked,
        Electronics: document.getElementById('Electronics').checked,
        Digital: document.getElementById('Digital').checked,
    }
 var Category = [];
    var keys = (Object.keys(categoryValues))
    for (i = 0; i < keys.length; i++) {
        if (categoryValues[keys[i]] == true) {

            Category.push(keys[i])
        }
    }

    var comissionPercentage = document.getElementById('Percentage').value

 var activeFrom = document.getElementById('activeFrom').value

    var logo = document.getElementById('logo').value

    var CriticalAccount = document.getElementById('criticalAccount').checked

    
     var paymentOptionValues = {

        cashonDelivery: document.getElementById('cashOnDelivery').checked,
        UPI: document.getElementById('UPI').checked,
        cardPayment: document.getElementById('cardPayment').checked,
    }
  var PaymentOptions = [];
    var options = Object.keys(paymentOptionValues)
    for (i = 0; i < options.length; i++) {
        if (paymentOptionValues[options[i]] == true) {
            PaymentOptions.push(options[i])
        }
    }

    let formValues = {

        companyname: document.getElementById('companyname').value,
        companyemail: document.getElementById('companyemail').value,
        companyphone: document.getElementById('companyphone').value,
        companywebsite: document.getElementById('companywebsite').value,
        contactname: document.getElementById('contactname').value,
        contactphone: document.getElementById('contactphone').value,
        contactemail: document.getElementById('contactemail').value,
        notes: document.getElementById('notes').value,
        BusinessType: BusinessType,
        Category: Category,
        comissionPercentage: document.getElementById('Percentage').value,
        activeFrom: document.getElementById('activeFrom').value,
        logo: document.getElementById('logo').value,
        CriticalAccount: CriticalAccount,
        PaymentOptions: PaymentOptions,

    }

    console.log("Form  :", formValues)

    document.getElementById("text").innerHTML = ` <table>
    <tr>
        <th>Company Name</th>
        <th>Company Email</th>
        <th>Company Phone</th>
        <th>Company Website</th>
        <th>Contact Name</th>
        <th>Contact Phone</th>
        <th>Contact Email</th>
        <th>Notes</th>
        <th>Business Type</th>
        <th>Category</th>
        <th>Comission Percentage</th>
        <th>Active From</th>
        <th>Logo</th>
        <th>Critical Account</th>
        <th>Payment Options</th>
    </tr>


        
        <tr>
    <td>${formValues.companyname}</td>
    <td>${formValues.companyemail}</td>
    <td>${formValues.companyphone}</td>
    <td>${formValues.companywebsite}</td>
    <td>${formValues.contactname}</td>
    <td>${formValues.contactphone}</td>
    <td>${formValues.contactemail}</td>
    <td>${formValues.notes}</td>
    <td>${formValues.BusinessType}</td>
    <td>${formValues.Category}</td>
    <td>${formValues.comissionPercentage}</td>
    <td>${formValues.activeFrom}</td>
    <td>${formValues.logo}</td>
    <td>${formValues.CriticalAccount}</td>
    <td>${formValues.PaymentOptions}</td>
</tr>
</table>`



}
)
