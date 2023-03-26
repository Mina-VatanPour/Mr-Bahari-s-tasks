// اصلاحات کد بعد از برررسی با آقای بهاری
// استفاده از متد constructor
// استفاده از متدهای foreach بجای for
// استفاده از متد findIndex بجای indexOf
// خلاصه نویسی شرط ها

class Acts {

    titlesArr = [];

    constructor(root) {
        this.root = root;
    }

    getFunction() {

        fetch(this.root, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                data.forEach(obj => this.titlesArr.push(obj.title))
                console.log(this.titlesArr);
            })
    }

    postFunction(acceptableUserId) {

        fetch(this.root, {
            method: 'POST',
            body: JSON.stringify({
                title: 'post',
                body: 'new post is coming !',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.userId === acceptableUserId) {
                    let obj = {
                        status: 200,
                        message: `title  <<${json.title}>> added :)`
                    }
                    console.log(obj)

                    this.titlesArr.push(json.title);

                    console.log(this.titlesArr)

                } else console.log("Sorry! You are not allowed to post :( ");
            })
            .catch(error => console.log(error))

    }

    putFunction(titleEnteredByUser) {

        fetch(this.root, {method: 'PUT'})
            .then(response => response.json())
            .then(() => {
                if (this.titlesArr.includes(titleEnteredByUser)) {

                    console.log("This title exists and can be edited :)")

                    const index = this.titlesArr.findIndex(indexOfTitle);
                    this.titlesArr[index] = "new post";

                    function indexOfTitle(title) {
                        return title === titleEnteredByUser;
                    }

                    console.log(` The title << ${index} => ${titleEnteredByUser}>>  replaced with <<${this.titlesArr[index]}>> `)
                    console.log(this.titlesArr)

                } else console.log("There is no such title !");

            });
    }

    deleteFunction(titleForDelete) {
        fetch(this.root, {method: "DELETE"})
            .then(response => response.json())
            .then(() => {
                if (this.titlesArr.includes(titleForDelete)) {

                    const index = this.titlesArr.findIndex(indexOfTitle);

                    function indexOfTitle(title) {
                        return title === titleForDelete;
                    }

                    const removeTitle = this.titlesArr.splice(index, 1);
                    console.log("title deleted is :" + removeTitle)
                    console.log(this.titlesArr);

                } else console.log("This title does not exist! ")

            })
    }


}

let act = new Acts("https://jsonplaceholder.typicode.com/posts");
act.getFunction();
act.postFunction(1);
act.putFunction("qui est esse");
act.deleteFunction("post");