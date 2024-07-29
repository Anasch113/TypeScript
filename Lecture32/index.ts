// TypeGuards in typescript. Type narrowing



const handleStudents = (hobbies: string[] | string) => {



    if (typeof hobbies === "object" ) {
        return hobbies.map((data, i) => {
            console.log("hobbies array:", data)
        })
    }

    else {
        console.log("hobbies:", hobbies)
    }


}

handleStudents("reading")
handleStudents(["coding", "gaming"])
