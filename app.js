const $ = document.querySelector.bind(document)
const app = (function() {
    const form = $('form')
    const input1 = $('#name1')
    const input2 = $('#name2')
    const button = $('.submit')
    const result = $('.result')
    const htmlNames = $('.names')
    const htmlPercent = $('.percent')
    const percentBg = $('.percent-bg')
    const message = $('.message')
    const restart = $('.restart')
    return {
        convertName(name) {
            let newName = name.slice(name.lastIndexOf(" ") + 1, name.length)
            newName = newName[0].toUpperCase() + newName.slice(1);
            return newName
        },
        sumName(name1, name2) {
            const lastname1 = this.convertName(name1)
            const lastname2 = this.convertName(name2)
            // let sum = 0;
            // for (letter of lastname1) {
            //     sum += letter.charCodeAt(0);
            // }
            // console.log(sum);
            const lastnames = lastname1 + lastname2;
            return lastnames;
        },
        caculate(lastnames) {
            let sumAscii = 0;
            for (letter of lastnames) {
                sumAscii += letter.charCodeAt(0);
            }
            return sumAscii
        },
        count(target, htmlCounter) {
            const updateCount = () => {
                const speed = 2000;
                const count = +htmlCounter.innerText;

                if(count < target) {
                    htmlCounter.innerText = count + 1;
                    setTimeout(updateCount, speed/target)
                }
                else {
                    htmlCounter.innerText = target;
                }
            }
            updateCount()
        },
        init() {
            //hanlde DOM event
            button.onclick = () => {
                form.setAttribute('class', 'fade-out')
                result.classList.add('fade-in')
                const name1 = input1.value;
                const name2 = input2.value;
                if(name1 && name2) {
                    console.log(1)
                    let resultPercent = this.caculate(this.sumName(name1,name2)) % 100;
                    const myCondition = this.caculate(this.sumName(this.convertName(name1),this.convertName(name2)))
                    console.log(myCondition);
                    if(myCondition===944 || myCondition===586 || myCondition===618 ) {
                        resultPercent = 95;
                    }
                    const hook = Math.floor(resultPercent / 10);
                    switch (hook) {
                        case (0):
                            message.innerText = "Haizz, d???ng l???i s??? b???t ??au h??n";
                            break;
                        case (1):
                            message.innerText = "C?? l??? ch??ng ta kh??ng h???p nhau :((";
                            break;
                        case (2):
                            message.innerText = "Ng?????i qua ???????ng th??i m??";
                            break;
                        case (3):
                            message.innerText = "Ng?????i ???y v???n xem b???n l?? b???n b??, nh??ng ?????ng bu???n nh??!";
                            break;
                        case (4):
                            message.innerText = "V???n c??n le l??i m???t tia hi v???ng, c??? l??n!";
                            break;
                        case (5):
                            message.innerText = "Hai b???n kh?? th??n ?????y ch???!";
                            break;
                        case (6):
                            message.innerText = "C?? l??? ng?????i ???y ??ang nh??? b???n l???m";
                            break;
                        case (7):
                            message.innerText = "Th??ch nhau m?? h??ng d??m n??i ph???i h??n";
                            break;
                        case (8):
                            message.innerText = "Hai b???n ???? r??i v??o l?????i t??nh r???i ????";
                            break;
                        case (9):
                            message.innerText = "Hai b???n sinh ra ????? d??nh cho nhau. Nhanh l??n, th??? l??? ??i, t??nh y??u kh??ng th??? ch???n ch??? ????u";
                            break;
                        default:
                            message.innerText = "";
                    }
                        htmlNames.innerText = this.convertName(name1) + " & " + this.convertName(name2)
                        this.count(resultPercent, htmlPercent);
                        percentBg.style.height = resultPercent + "%"
                } else {
                    message.innerText = `B???n c???n nh???p ????? 2 t??n nha
                    (??? ???? ??;)???`
                }
            }

            result.onclick = () => {
                location.reload();
            }
        }
    }
})()
app.init()