let koders = [{
    name: "Isra",
    birthDate: "09/27/1989"
}, {
    name: "Rodolfo",
    birthDate: "11/27/1998"
}, {
    name: "Kim",
    birthDate: "11/15/1996"
}, {
    name: "Iyari",
    birthDate: "09/26/1997"
}, {
    name: "Manu",
    birthDate: "11/21/1986"
}, {
    name: "Antonio",
    birthDate: "07/23/1993"
}, {
    name: "Rafa",
    birthDate: "03/11/1997"
}, {
    name: "Eddie",
    birthDate: "11/05/1997"
}, {
    name: "Jesús",
    birthDate: "11/04/2000"
}, {
    name: "Mar",
    birthDate: "12/18/1994"
}, {
    name: "Roberto",
    birthDate: "01/14/1985"
}, {
    name: "Javi",
    birthDate: "12/07/1993"
}, {
    name: "Mario",
    birthDate: "11/02/1999"
}]

/* document.addEventListener("DOMContentLoaded", function(event) {
    const getTimeBeforeBirthday = (arrayKoders) => {
        let listUser = document.getElementById("birthday-list");
        let date = arrayKoders.map((item) => {
          let { name, dateOfBirth } = item;
          let arrayBirthDate = dateOfBirth.split("/");
          arrayBirthDate[2] = new Date(arrayBirthDate.join("/")).getTime();
          let days = Math.trunc((arrayBirthDate[2] - Date.now()) / (1000 * 60 * 60 * 24));
          let description;
          let finalDays = days % 30;
          if (finalDays > 0 && days > 30) {
            description = `Faltan ${(days - finalDays) / 30} meses y ${finalDays} dias`;
          } else if (days > 0 && days < 30) {
            description = `Faltan ${finalDays} dias`;
          } else {
            description = `Tu cumpleaños fue hace ${Math.abs(days - finalDays) / 30} meses y ${Math.abs(finalDays)} dias`;
          }
          let userKoder = document.createElement("li");
          let userName = document.createTextNode(`${name} -> ${description}`);
          userKoder.appendChild(userName);
          listUser.appendChild(userKoder);
          });
        return date;
      }
      let result = getTimeBeforeBirthday(koders)
    console.log(result) 
  }); */

let birthdaysElementTitle = document.createElement("h1");
let birthdaysTextTitle = document.createTextNode("Tiempo faltante para el cumpleaños de los Koders G-24");
let birthdaysTitle = birthdaysElementTitle.appendChild(birthdaysTextTitle);
document.body.appendChild(birthdaysTitle);

const birthdays = (kodersList) => {
    let currentDate = Date.now();
    let result = kodersList.map((koder) => {
        let {name, birthDate} = koder
        let birthDay = new Date[birthDate].getTime();
        let timeDiff = birthDay - currentDate; /*milisegundos*/
        let timeDiffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let timeDiffInMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
        let leftoverDays = Math.floor(timeDiffInDays % 30.5);
        let paragraph = document.createElement("p");
        leftoverDays < 0 ? paragraph.innerHTML = `El cumpleaños de ${name} fue hace ${-timeDiffInMonths} meses y ${-leftoverDays} dias` : paragraph.innerHTML = `Faltan ${timeDiffInMonths} meses y ${leftoverDays} dias p document.body.appendChild(paragraph)`;
        return result
    })
}

birthdays(koders)