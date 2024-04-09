document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById('name')
    const sex_girl = document.getElementById('nu')
    const sex_boy = document.getElementById('nam')
    const wish = document.getElementById('wish')
    const btn = document.getElementById('btn-submit')
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
            name: name.value,
            sex_girl: sex_girl.checked,
            sex_boy: sex_boy.checked,
            wish: wish.value,
        }
        postDataGG(data);
        alert("Gửi lời chúc thành công! Cảm ơn bạn nhiều nha ");
    })
    async function postDataGG(data) {
        const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeVmL8v9DdL5PhLlIGj706CJoZ_QocU6Ogy2PPkqw5hdGyQLA/formResponse";
        const formData = new FormData()
        formData.append('entry.916123779', data.name);
        formData.append('entry.660451796', data.wish);
        await fetch(formURL, {
            method: "POST",
            body: formData,
        })
    }
})