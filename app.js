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
                let resultPercent = this.caculate(this.sumName(name1,name2)) % 100;
                const myCondition = this.caculate(this.sumName(this.convertName(name1),this.convertName(name2)))
                console.log(myCondition);
                if(myCondition===944 || myCondition===8553 || myCondition===586 || myCondition===801 || myCondition===618 ) {
                    resultPercent = 99;
                }
                const hook = Math.floor(resultPercent / 10);
                switch (hook) {
                    case (0):
                        message.innerText = "Haizz, bạn nên biết đâu là điểm dừng :((";
                        break;
                    case (1):
                        message.innerText = "Có lẽ chúng ta không hợp nhau :((";
                        break;
                    case (2):
                        message.innerText = "Người qua đường thôi mà";
                        break;
                    case (3):
                        message.innerText = "Bạn bè cũng tốt mà";
                        break;
                    case (4):
                        message.innerText = "Vẫn còn le lói một tia hi vọng";
                        break;
                    case (5):
                        message.innerText = "Hai bạn khá thân đấy chứ!";
                        break;
                    case (6):
                        message.innerText = "Có lẽ người ấy đang nhớ bạn đó";
                        break;
                    case (7):
                        message.innerText = "Thích nhau mà hông dám nói phải hôn";
                        break;
                    case (8):
                        message.innerText = "Hai bạn đã rơi vào lưới tình rồi đó";
                        break;
                    case (9):
                        message.innerText = "Tỏ tình luôn đi, đợi gì nữa <3!!";
                        break;
                    default:
                        message.innerText = "Nhập tên đi rồi bói";
                }
                if(name1 && name2) {
                    htmlNames.innerText = this.convertName(name1) + " & " + this.convertName(name2)
                    this.count(resultPercent, htmlPercent);
                }
                percentBg.style.height = resultPercent + "%"
            }

            result.onclick = () => {
                location.reload();
            }
        }
    }
})()
app.init()