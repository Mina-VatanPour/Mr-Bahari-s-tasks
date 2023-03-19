// کدهای اولیه که خودم زدم قبل بررسی
// استفاده از حلقه for
// استفاده از متد indexOf
// عدم بررسی موجودیت دیتا
// خلاصه نبودن دستورات if
// عدم استفاده از متد constructor

const root = "https://jsonplaceholder.typicode.com/posts";

class Acts {

    titlesArr = [];

    getFunction() {

        fetch(root, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                        // روش اول که از for استفاده کردم
                        for (let i = 0; i <= data.length; i++) {
                            if (data[i].title) this.titlesArr.push(data[i].title);
                            else this.titlesArr.push("None")
                            console.log([i] + ' => ' + data[i].title);
                        }
                }
            )
    }

    postFunction(acceptableUserId) {

        fetch(root, {
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
            .then((response) => response.json())
            .then((json) => {
                if (json.userId === acceptableUserId) {
                    let obj = {
                        status: 200,
                        message: `title  <<${json.title}>> added :)`
                    }
                    console.log(obj);
                    this.titlesArr.push(json.title);

                    console.log(this.titlesArr)
                } else console.log("Sorry! You are not allowed to post! ")
            })
            .catch(error => console.log(error))

    }

    putFunction(titleEnteredByUser) {

        fetch(root, {method: 'PUT'})
            .then((response) => response.json())
            .then(() => {
                if (titleEnteredByUser) {
                    if (this.titlesArr.includes(titleEnteredByUser)) {

                        console.log("This title exists and can be edited :)")

                        const id = this.titlesArr.indexOf(titleEnteredByUser);
                        this.titlesArr[id] = "Update old title";

                        console.log(this.titlesArr)

                    } else console.log("There is no such title !");
                }
            });
    }

    deleteFunction(titleForDelete) {
        fetch(root, {method: "DELETE"})
            .then((response) => response.json())
            .then(() => {
                if (this.titlesArr.includes(titleForDelete)) {

                    // روش اولی که انجام داده بودم با indexOf :
                    const id = this.titlesArr.indexOf(titleForDelete);
                    const removeTitle = this.titlesArr.splice(id, 1);
                    console.log("title deleted is :" + removeTitle)
                    console.log(this.titlesArr)

                } else console.log("This title does not exist! ")

            })
    }


}

let act = new Acts();
act.getFunction();
act.postFunction(1);
act.putFunction("qui est esse");
act.deleteFunction("post");