const myProfile = {
  myName: "Esther",
  myAge: 26,
  country: "Nigeria",
  hobby: "reading",
  displayProfile: () => {
    return `My name is ${myProfile.myName} am ${myProfile.myAge} a ${myProfile.country} and love ${myProfile.hobby}`
  }
}
console.log(myProfile.displayProfile())
