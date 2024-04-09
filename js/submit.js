document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById('name')
    const sex_girl = document.getElementById('nu')
    const sex_boy = document.getElementById('nam')
    const wish = document.getElementById('wish')
    const btn = document.getElementById('btn-submit')
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value === '' || (sex_girl.checked === false && sex_boy.checked === false) || wish.value === '') {
            alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
            return; // Dừng hàm nếu thông tin chưa được điền đầy đủ
        }
        let gender = ''
        if (sex_girl.checked) {
            gender = sex_girl.value;
        } else {
            gender = sex_boy.value;
        }
        const data = {
            name: name.value,
            gender: gender,
            wish: wish.value,
        }
      
        postDataGG(data);
        alert("Gửi lời chúc thành công! Cảm ơn bạn nhiều nha ");
    })
    async function postDataGG(data) {
        const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeVmL8v9DdL5PhLlIGj706CJoZ_QocU6Ogy2PPkqw5hdGyQLA/formResponse";
        const formData = new FormData()
        formData.append('entry.916123779', data.name);
        formData.append('entry.149657587', data.gender);
        formData.append('entry.660451796', data.wish);
        await fetch(formURL, {
            method: "POST",
            body: formData,
        })
    }
})