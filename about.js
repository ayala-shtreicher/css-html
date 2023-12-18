document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementsByClassName("text")[0];
    const read = document.getElementsByClassName("read")[0];
    let flag = false;

    read.addEventListener("click", function () {
        flag = !flag;
        if (flag) {
            text.innerHTML += "Officia dolores dolore architecto deleniti repudiandae nobis a perferendis porro exercitationem, Asperiores ex placeat dolorum natus rerum reprehenderit culpa veritatis sit doloribus. Voluptas   sequi in     odio optio. Aspernatur dolores repellat vitae assumenda minima, tempora officiis ipsam cumque id  nobis   ut nemo eveniet, animi totam quod quia quisquam molestiae pariatur? Enim earum iste cupiditate nam  sapiente eaque labore. Fugit odio pariatur blanditiis sapiente hic numquam, earum accusamus moddignissimos, ex natus commodi possimus eligendi quo ipsa.";
            read.innerText = "read less";

        } else {
            text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam esse explicabo deserunt quos expedita voluptatum, totam voluptatibus, ipsum aut incidunt adipisci velit nobis quae ex quibusdam   assumenda voluptas provident quidem illum vero omnis libero doloremque? Numquam ab totam eum"
            read.innerText = "read more";
        }
    });
});
