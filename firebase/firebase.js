
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/users");
// const outputHeader = document.querySelector("#wedding");
const inputTextField1 = document.querySelector("#name");
const inputTextField2 = document.querySelector("#email");
const inputTextField3 = document.querySelector("#password");
// const inputTextField = document.querySelector("#title");
// const inputTextField = document.querySelector("#status");

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
    const textToSave1 = inputTextField1.nodeValue1;
    const textToSave2 = inputTextField2.nodeValue2;
    const textToSave3 = inputTextField3.nodeValue3;
    console.log("I am going to save" + textToSave1 + "to firestore");
    console.log("I am going to save" + textToSave2 + "to firestore");
    console.log("I am going to save" + textToSave3 + "to firestore");
    docRef.set({
        // hotDogStatus: textToSave
        name: textToSave1,
        email: textToSave2,
        password: textToSave3
    }).then(function() {
        console.log("satus saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
})


















// var contactRef = firebase.database().ref().child("contactform");

//             document.getElementById('displayform1').addeventListner('submit',submitForm);

//             function submitForm(e){

//                 e.preventdefault();

//                 var Name = getInputVal('Name');
//                 var Email = getInputVal('Email');
//                 var Password = getInputVal('Password');
//                 var Title = getInputVal('Title');
//                 var Status = getInputVal('Status');

//                 saveForm(Name,Email,Password,Title,Status);

//                 document.getElementById('displayForm1').reset();
//             }        

//             function getInputVal(id){
//                 return document.getElementById(id).value;
//             }

//             function saveform(Name,Email,Password,Title,Status){
                
//                 var newContactRef = contactRef.push(),
//                 newContactRef.set({

//                     Name : Name,
//                     Email : Email,
//                     Password : Password,
//                     Title : Title,
//                     Status : Status
//                 });
//             }















// db.collection("users").add({
//     name: "Ada",
//     email: "Lovelace",
//     password: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
